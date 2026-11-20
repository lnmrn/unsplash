import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";
import ErrorCmp from "./ErrorCmp";
import GalleryItem from "./GalleryItem";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=office`;

function Gallery() {
  const {
    data: { results },
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
    initialData: [],
  });
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
