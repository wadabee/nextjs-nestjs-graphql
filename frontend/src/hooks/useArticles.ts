import { useArticlesQuery } from "../generated";

const useArticles = () => {
  const { data } = useArticlesQuery();
};

export default useArticles;
