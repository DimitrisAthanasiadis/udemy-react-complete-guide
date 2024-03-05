import classes from "./Modal.module.css"


function Modal({ children, onClose }) {
    // props decoupling. replaces the props attribute.
    // children is used to pass the containing/wrapped elements.
    // in this case it is the NewPost component.

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return <>
        <div className={classes.backdrop} onClick={onClose} >
            <dialog open className={classes.modal} onClick={stopPropagation} >
                {children}
            </dialog>
        </div>
    </>
}


export default Modal;
