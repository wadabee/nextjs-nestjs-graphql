import { Button, Textarea } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useAddCommentMutation } from "../../../src/generated";
import Card from "../basic/Card";

type Props = {
  articleId: string;
};

const CardRegisterComment: React.FC<Props> = ({ articleId }) => {
  const [comment, setComment] = useState("");
  const [addComment, { data, loading }] = useAddCommentMutation();

  const handleAdd = useCallback(() => {
    addComment({
      variables: {
        articleId,
        body: comment,
      },
    });
  }, [addComment, articleId, comment]);

  return (
    <Card>
      <Textarea
        mb={2}
        placeholder="Enter your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button colorScheme="blue" onClick={handleAdd}>
        Add Comment
      </Button>
    </Card>
  );
};

export default CardRegisterComment;
