import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from "react-dom";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 pd-4 min-h-[200px] max-w-[80%] bg-white">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl " />
            </div>
            {children}
          </div>
          <div className="backdrop-blur z-40 h-screen w-screen absolute top-0" />
        </>
      )}
    </>
 ,document.getElementById("modal-root") );
};

export default Modal;
