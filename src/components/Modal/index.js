import React from 'react';
import s from './index.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faXmark} from "@fortawesome/free-solid-svg-icons";

const Index = ({ visible, setVisible, modalTitle, modalContent, onCancel, onDone }) => {

    const keyDown = (event) => {
        console.log(event.key);
        if (event.key === "ESC" || "Esc") {
            setVisible(false)
        }
        else {
            return null
        }
    }

    if (!visible) return null



    return (
        <div className={s.overlay}
        >
            <div className={s.modal}>
                <div className={s.modalHeader}>
                    <h2>{ modalTitle }</h2>
                    <button
                        onClick={() => setVisible(false)}
                        className={s.XcancelBtn}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className={s.modalContent}>
                    {modalContent}
                </div>
                <div className={s.modalFooter}>
                    <button
                        className={s.cancelButton}
                        onClick={onCancel}>Cancel</button>
                    <button
                        onClick={onDone}
                        className={s.doneBtn}
                    >Done</button>
                </div>
            </div>

        </div>

    );
};

export default Index;