import { Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import ListArticle from "../components/article/ListArticle";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClickOnArticle = (id: string) => {
    router.push(`/article/${id}`);
  };

  return (
    <div className={styles.container}>
      <Box m={2}>
        <Heading mb={2} size="lg">
          Articles
        </Heading>
        <ListArticle onClick={handleClickOnArticle} />
      </Box>
    </div>
  );
};

export default Home;
