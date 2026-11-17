import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=office`;

function Gallery() {
  const data = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
    initialData: [],
  });
  console.log(data);
  return <div>Gallery</div>;
}

export default Gallery;
