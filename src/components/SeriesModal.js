import { useEffect, useState } from "react";
import Modal from "react-modal";
import "@fortawesome/fontawesome-free/css/all.css";

Modal.setAppElement("body");
const SeriesModal = ({ isOpen, selected, onRequestClose, contentLabel }) => {
  const [axa, setAxa] = useState(isOpen);

  useEffect(() => {
    setAxa(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Modal
        isOpen={axa}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
      >
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-inner">
              <div className="modal-header">
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}

                <h1>{selected ? selected.name : "Select a series"}</h1>
                <button className="modal-close" onClick={onRequestClose}>
                  <i className="fa-fw fa fa-times"></i>
                </button>
              </div>
              <div className="modal-image-container">
                <img
                  className="modal-image"
                  src={selected && selected.image}
                  alt=""
                />
              </div>
              <p>{selected && selected.synopsis}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SeriesModal;
