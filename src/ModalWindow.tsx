import { ReactNode } from 'react';
import css from './style.module.css';

interface PropsType {
    children: ReactNode;
    titleOk?: string;
    titleCansel?: string;
    onCansel: () => void;
    onOk: () => void;
}

export const BaseModalWindow = ({children, titleOk = 'Ок', titleCansel = 'Отмена', onCansel, onOk,}: PropsType) => {
    return (
        <div className={css.overlay}>
            <div className={css.container}>
                <div className={css.close} onClick={onCansel}>
                    x
                </div>
                <div className={css.body}>{children}</div>
                <div className={css.btnContainer}>
                    <button onClick={onCansel}>
                        {titleCansel}
                    </button>
                    <button onClick={onOk}>
                        {titleOk}
                    </button>
                </div>
            </div>
        </div>
    );
};
