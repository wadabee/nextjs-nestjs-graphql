import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useArticlesQuery } from "../../../src/generated";
import { CardArticle } from "./CardArticle";

export const ListArticle = () => {
  const { data } = useArticlesQuery();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2">
      {data?.articles.map((article) => {
        return <CardArticle key={article.id} article={article} />;
      })}
    </SimpleGrid>
  );
};
