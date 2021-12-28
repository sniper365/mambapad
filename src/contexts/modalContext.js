import React, { useCallback, useEffect, useState } from "react";

const ModalContext = React.createContext();

const Modal = ({ modalTitle, modalBody, unSetModal }) => {
  console.info(modalTitle);
  useEffect(() => {
    const bind = (e) => {
      if (!e.keyCode === 27) {
        return;
      }

      if (
        document.activeElement &&
        ["INPUT", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }

      unSetModal();
    };

    document.addEventListener("keyup", bind);
    return () => document.removeEventListener("keyup", bind);
  }, [modalTitle, modalBody, unSetModal]);

  return (
    <div className="modal">
      <button className="modal__close" onClick={unSetModal} />
      <div className="modal__inner">
        <div className="modal__header">
          {modalTitle}
          <button className="modal__close-btn" onClick={unSetModal}>
            <svg
            // height="20"
            // width="20"
            // viewBox="0 0 20 20"
            // aria-hidden="true"
            // focusable="false"
            >
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
            </svg>
          </button>
        </div>
        <div className="modal__body">{modalBody}</div>
      </div>
    </div>

    // <div
    //   class="modal"
    //   id="exampleModal"
    //   tabindex="-1"
    //   aria-labelledby="exampleModalLabel"
    //   aria-hidden="true"
    // >
    //   <div class="modal-dialog ">
    //     <div class="modal-content modal__inner">
    //       <div class="modal-header">
    //         <h5 class="modal-title" id="exampleModalLabel">
    //           {modalTitle}
    //         </h5>
    //         <button
    //           type="button"
    //           class="btn-close"
    //           data-mdb-dismiss="modal"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div class="modal-body">{modalBody}</div>
    //     </div>
    //   </div>
    // </div>
  );
};

const ModalProvider = (props) => {
  const [modalTitle, setModalTitle] = useState();
  const [modalBody, setModalBody] = useState();
  const unSetModal = useCallback(() => {
    setModalTitle();
    setModalBody();
  }, [setModalTitle, setModalBody]);

  return (
    <ModalContext.Provider
      value={{ unSetModal, setModalTitle, setModalBody }}
      {...props}
    >
      {props.children}
      {modalTitle && (
        <Modal
          modalTitle={modalTitle}
          modalBody={modalBody}
          unSetModal={unSetModal}
        />
      )}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a UserProvider");
  }

  return context;
};

export { ModalProvider, useModal };
