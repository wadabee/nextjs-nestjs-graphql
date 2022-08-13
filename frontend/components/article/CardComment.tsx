import { Box } from "@chakra-ui/react";
import React from "react";
import { Comment } from "../../src/generated";
import Card from "../basic/Card";

type Props = {
  comment: Comment;
};

const CardComment: React.FC<Props> = ({ comment }) => {
  return <Card>{comment.body}</Card>;
};

export default CardComment;
