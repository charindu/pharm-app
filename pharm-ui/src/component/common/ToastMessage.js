import React from 'react';
import { useToasts } from 'react-toast-notifications'

const ToastMessage = (props) =>{
    const { addToast } = useToasts();
    addToast(props.message, {
        appearance: 'success',
        autoDismiss: true,
    });
    /*return(
        <button onClick={() => addToast(props.message, {
            appearance: 'success',
            autoDismiss: true,
        })}>
            Add Toast
        </button>
    );*/
}

export default ToastMessage;