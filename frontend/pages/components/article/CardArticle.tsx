import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Article } from "../../../src/generated";

type Props = {
  article: Article;
};

export const CardArticle: React.FC<Props> = ({ article }) => {
  const [shadow, setShadow] = useState("none");

  const handleMouseOver = () => {
    setShadow("md");
  };
  const handleMouseOut = () => {
    setShadow("none");
  };

  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
      key={article.id}
      borderWidth="thin"
      borderRadius="md"
      p={1}
      shadow={shadow}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Heading size="md" ml={1}>
        {article.title}
      </Heading>

      <Text fontSize="sm" isTruncated as="i" ml={3}>
        {article.body}
      </Text>
    </Box>
  );
};
