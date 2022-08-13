import { Box, Button, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useAddCommentMutation, useArticleQuery } from "../../../src/generated";
import CardComment from "../../../components/article/CardComment";
import RegisterComment from "../../../components/article/CardRegisterComment";

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, refetch } = useArticleQuery({
    variables: { id: id as string },
  });

  const comments = useMemo(() => {
    return data ? data.article.comments ?? [] : [];
  }, [data]);

  const [addComment, { loading }] = useAddCommentMutation();
  const onRegisterComment = (articleId: string, comment: string) => {
    return addComment({
      variables: {
        articleId,
        body: comment,
      },
    }).finally(() => {
      refetch();
    });
  };

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

          <RegisterComment
            articleId={data?.article.id ?? ""}
            loading={loading}
            onRegister={onRegisterComment}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
