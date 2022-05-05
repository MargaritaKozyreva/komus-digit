import React, { useRef, useEffect, useCallback } from "react";
import ModalHeader from "../components/Modal/ModalHeader";
import ModalBody from "../components/Modal/ModalBody";
import ModalFooter from "../components/Modal/ModalFooter";
import { createPortal } from "react-dom";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, ModalState } from "../redux/ModalSlices";
import { MODAL_KEY_TO_COMPONENT_MAP } from "../components/ModalController";
interface Props {
  isClosable?: any;
  closeOutside?: boolean;
  width?: string | number;
  escapeKey?: boolean;
}

const Modal = (props: Props) => {
  const {
    isClosable = true,
    closeOutside = true,
    width = "max-content",
    escapeKey = true,
  } = props;

  const dispatch = useDispatch();
  const modalState = useSelector((state: { modal: ModalState }) => state.modal);

  const customStyle = {
    background: modalState.withBackground ? "#fff" : "",
  };

  const modalRef: React.MutableRefObject<null> = useRef(null);
  const className = modalState.isShow
    ? "modal-clever show"
    : "modal-clever hide";

  const handleUserKeyPress = useCallback(
    e => {
      if (e.code === "Escape" && escapeKey && isClosable) {
        dispatch(modalActions.hideModal());
      }
    },
    [escapeKey, isClosable, dispatch]
  );

  const clickOutside = useCallback(
    e => {
      if (closeOutside && e.target === modalRef.current && isClosable) {
        dispatch(modalActions.hideModal());
      }
    },
    [closeOutside, isClosable, dispatch]
  );

  useEffect(() => {
    if (modalState.isShow === true) {
      window.addEventListener("keydown", handleUserKeyPress);
      window.addEventListener("mousedown", clickOutside);
    }
    return () => {
      if (modalState.isShow === false) {
        window.removeEventListener("keydown", handleUserKeyPress);
        window.removeEventListener("mousedown", clickOutside);
      }
    };
  }, [modalState.isShow]);

  const Component = MODAL_KEY_TO_COMPONENT_MAP[modalState.key];

  return createPortal(
    <div className={className} ref={modalRef}>
      {isClosable && (
        <div
          id="close-pop"
          onClick={() => dispatch(modalActions.hideModal())}
          className="modal-clever-content__btn-modal-close"
        >
          <img
            src={`${process.env["API"]}/komus_num/app/images/icons/close.svg`}
            alt=""
          />
        </div>
      )}

      <div className="modal-clever-content" style={customStyle}>
        {modalState.isShow && (
          <div className="modal-clever-content__wrapper">
            <Component {...modalState.payload} />
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
