import { Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useArticleQuery } from "../../../src/generated";

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useArticleQuery({ variables: { id: id as string } });

  return (
    <Box p={4}>
      <Heading size={"lg"}>{data?.article.title}</Heading>
      <Box pt={3}>{data?.article.body}</Box>
    </Box>
  );
};

export default Article;
