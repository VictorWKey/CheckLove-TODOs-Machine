import React from 'react'
import { createPortal } from 'react-dom';
import "./Modal.css"
import { TodoContext } from '../TodoContext';

function Modal({children}) {
  const {setOpenModal} = React.useContext(TodoContext)

  return createPortal(
    <div className="ModalBackground" onClick={() => {
      setOpenModal(false);
    }}>
      {children}
    </div>,
    document.getElementById('modal')
  );
}



export { Modal }
