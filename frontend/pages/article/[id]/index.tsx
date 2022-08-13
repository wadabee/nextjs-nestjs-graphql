import { Box, Button, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useArticleQuery } from "../../../src/generated";
import CardComment from "../../components/article/CardComment";
import RegisterComment from "../../components/article/CardRegisterComment";

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useArticleQuery({ variables: { id: id as string } });

  const comments = useMemo(() => {
    return data ? data.article.comments ?? [] : [];
  }, [data]);

  return (
    <Box p={4}>
      <Heading size={"lg"}>{data?.article.title}</Heading>
      <Box pt={3}>{data?.article.body}</Box>

      <Box pt={5}>
        <Heading size="md">Comments</Heading>

        <Box p={3}>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <Box key={comment.id} mb={2}>
                <CardComment comment={comment} />
              </Box>
            ))
          ) : (
            <Text as="em">no comments</Text>
          )}

          <RegisterComment articleId={data?.article.id ?? ""} />
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
