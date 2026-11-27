function GalleryItem({ url, setSelectedImg }) {
  return (
    <img src={url} className="image" onClick={() => setSelectedImg(url)} />
  );
}

export default GalleryItem;
