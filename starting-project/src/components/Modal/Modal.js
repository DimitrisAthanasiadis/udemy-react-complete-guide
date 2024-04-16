import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css"


function Modal({ children }) {
    // props decoupling. replaces the props attribute.
    // children is used to pass the containing/wrapped elements.
    // in this case it is the NewPost component.

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    const navigate = useNavigate();

    function closeHandler() {
        navigate("..");  // previous page. like the linux terminal.
    }

    return <>
        <div className={classes.backdrop} onClick={closeHandler} >
            <dialog open className={classes.modal} onClick={stopPropagation} >
                {children}
            </dialog>
        </div>
    </>
}


export default Modal;
