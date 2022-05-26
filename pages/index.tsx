import type { NextPage } from "next";
import Head from "next/head";
import { Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
  landingPageContainer: {
    maxWidth: theme.breakpoints.lg,
    margin: "auto",
  },

  heroContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },

  heroButton: {
    width: 240,
  },

  playRpgsContainer: {
    display: "flex",
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.landingPageContainer}>
      <Head>
        <title>Project Legend</title>
        <meta
          name="description"
          content="Create and play RPG scenarios and campaigns"
        />
      </Head>

      <div className={classes.heroContainer}>
        <h1>Your online RPG one stop shop</h1>
        <h2>
          Play your favourite RPGs with friends and strangers. Create RPG
          scenarios and campaigns. All online.
        </h2>
        <Button className={classes.heroButton}>Get started</Button>
      </div>
      <div className={classes.playRpgsContainer}>
        <div>
          <h3>Play RPGs</h3>
          <p>Join your friends in a live play session. </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
