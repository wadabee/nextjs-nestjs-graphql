import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useArticlesQuery } from "../../../src/generated";
import { CardArticle } from "./CardArticle";

type Props = {
  onClick: (id: string) => void;
};

export const ListArticle: React.FC<Props> = ({ onClick }) => {
  const { data } = useArticlesQuery();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2">
      {data?.articles.map((article) => {
        return (
          <CardArticle key={article.id} article={article} onClick={onClick} />
        );
      })}
    </SimpleGrid>
  );
};
