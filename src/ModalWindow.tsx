import {ReactNode} from "react";
import css from "./ModalWindow.module.css"

interface PropsType {
    children: ReactNode;
    titleOk?: string;
    titleCansel?: string;
    onCansel: () => void;
    onOk: () => void;
    isOpen: boolean;
}

export const BaseModalWindow = ({children, titleOk = 'Ок', titleCansel = 'Отмена', onCansel, onOk, isOpen,}: PropsType) => {
    if (!isOpen) {
        return null;
    }
    return (
        // <Portal>
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
        // </Portal>
    );
};