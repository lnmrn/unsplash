import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";
import ErrorCmp from "./ErrorCmp";
import GalleryItem from "./GalleryItem";
import { useGlobalContext } from "../GlobalContext";

function Gallery() {
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

  return (
    <section className="image-container">
      <h4>
        {isLoading && <Loader />}
        {isError && <ErrorCmp isError={isError} />}
      </h4>
      {results?.map((result) => (
        <GalleryItem key={result.id} url={result.urls.regular} />
      ))}
    </section>
  );
}

export default Gallery;
