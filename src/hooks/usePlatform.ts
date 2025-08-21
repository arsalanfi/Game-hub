import useData from "./useData";
import type { Genre } from "./useGenres";

interface platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => useData<platforms>("/platforms/lists/parents");

export default usePlatform;
