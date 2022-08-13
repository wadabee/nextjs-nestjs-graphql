import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return (
    <Box borderWidth="thin" borderRadius="md" p={1}>
      {children}
    </Box>
  );
};

export default Card;
