import PropTypes from "prop-types";
import "./modal.scss";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ closeButton, modalData, actions, onClose }) => {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };


  return (
    <div className="modal-overlay" onClick={onClose} data-testid='modal-overlay'>
      <div className="modal" onClick={handleModalContentClick} data-testid='modal'>
        <div className="modal-content" >
          <div className="modal-header">
            <h3 className="modal-title" data-testid='header'>{modalData.header}</h3>
            {closeButton ? (
              <span className="close-btn" onClick={onClose}>
                <AiOutlineClose />
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="modal-body" data-testid='text'>
            <p>{modalData.text}</p>
          </div>
          <div className="modal-footer">{actions}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeButton: PropTypes.bool,
  onClose: PropTypes.func,
  modalData:PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};

Modal.defaultProps = {
  closeButton: true,
  modalData: {}
};
export default Modal;
