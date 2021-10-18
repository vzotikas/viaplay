import Modal from "react-modal";
import "@fortawesome/fontawesome-free/css/all.css";

Modal.setAppElement("body");
const SeriesModal = ({
  selectedSeries,
  isOpen,
  onRequestClose,
  contentLabel,
}) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
      >
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-inner">
              <div className="modal-header">
                <h1>
                  {selectedSeries ? selectedSeries.title : "Select a series"}
                </h1>
                <button className="modal-close" onClick={onRequestClose}>
                  <i className="fa-fw fa fa-times"></i>
                </button>
              </div>
              <div className="modal-image-container">
                <img
                  className="modal-image"
                  src={selectedSeries && selectedSeries.image}
                  alt=""
                />
              </div>
              <p>{selectedSeries && selectedSeries.synopsis}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SeriesModal;
