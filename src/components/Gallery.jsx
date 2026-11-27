import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";
import ErrorCmp from "./ErrorCmp";
import GalleryItem from "./GalleryItem";
import { useGlobalContext } from "../GlobalContext";
import { useState } from "react";
import Modal from "./Modal";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const { query } = useGlobalContext();
  const displayQuery = query || "forest";
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", displayQuery],
    queryFn: async () => {
      const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${displayQuery}&per_page=30`;
      const res = await axios.get(url);
      return res.data;
    },
  });

  const results = data?.results ?? [];

  console.log(selectedImg);

  return (
    <section className="image-container">
      <h4>
        {isLoading && <Loader />}
        {isError && <ErrorCmp isError={isError} />}
      </h4>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {results?.map((result) => (
        <GalleryItem
          key={result.id}
          url={result.urls.regular}
          setSelectedImg={setSelectedImg}
          selectedImg={selectedImg}
        />
      ))}
    </section>
  );
}

export default Gallery;
