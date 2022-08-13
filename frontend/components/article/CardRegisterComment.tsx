import { Button, Textarea } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useAddCommentMutation } from "../../src/generated";
import Card from "../basic/Card";

type Props = {
  articleId: string;
  loading?: boolean;
  onRegister: (articleId: string, comment: string) => Promise<any>;
};

const CardRegisterComment: React.FC<Props> = ({
  articleId,
  loading,
  onRegister,
}) => {
  const [comment, setComment] = useState("");

  return (
    <Card>
      <Textarea
        mb={2}
        placeholder="Enter your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        colorScheme="blue"
        isLoading={loading ?? false}
        onClick={() => {
          onRegister(articleId, comment).then(() => {
            setComment("");
          });
        }}
      >
        Add Comment
      </Button>
    </Card>
  );
};

export default CardRegisterComment;
