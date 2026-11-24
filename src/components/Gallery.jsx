import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";
import ErrorCmp from "./ErrorCmp";
import GalleryItem from "./GalleryItem";
import { useGlobalContext } from "../GlobalContext";

function Gallery() {
  const { query } = useGlobalContext();
  const displayQuery = query || "forest";
  const {
    data: { results },
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["images", displayQuery],
    queryFn: async () => {
      const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${displayQuery}&per_page=30`;
      const res = await axios.get(url);
      return res.data;
    },
    initialData: [],
  });
  if (results?.length < 1) return "No results found. Try again.";
  if (isLoading) return <Loader />;
  if (isError) return <ErrorCmp isError={isError} />;

  return (
    <section className="image-container">
      <h4>
        {isLoading && <Loader />}
        {isError && <ErrorCmp isError={isError} />}
        {results?.map((result) => (
          <GalleryItem key={result.id} url={result.urls.regular} />
        ))}
      </h4>
    </section>
  );
}

export default Gallery;
