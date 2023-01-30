import React from "react";

const Modal = (props) => {
    if (!props.isOpen) return null;
    return (
        <div
            onClick={props.onClose}
            className="fixed inset-0 lg:hidden bg-black bg-opacity-25 backdrop-blur-sm z-10"
        ></div>
    );
};

export default Modal;
