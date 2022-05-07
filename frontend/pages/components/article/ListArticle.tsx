import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useArticlesQuery } from "../../../src/generated";

export const ListArticle = () => {
  const { data } = useArticlesQuery();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="2">
      {data?.articles.map((article) => {
        return (
          <Box key={article.id} borderWidth="thin" borderRadius="md" p={1}>
            <Heading size="md" ml={1}>
              {article.title}
            </Heading>

            <Text fontSize="sm" isTruncated as="i" ml={3}>
              {article.body}
            </Text>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
