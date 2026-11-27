function Modal({ selectedImg, setSelectedImg }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={selectedImg} className="modal-image" />
      </div>
      <button onClick={() => setSelectedImg(null)}>X</button>
    </div>
  );
}

export default Modal;
