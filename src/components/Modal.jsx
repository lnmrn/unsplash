import { MdClose } from "react-icons/md";

function Modal({ selectedImg, setSelectedImg }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <MdClose className="close-modal" onClick={() => setSelectedImg(null)} />
        <img src={selectedImg} className="modal-image" />
      </div>
    </div>
  );
}

export default Modal;
