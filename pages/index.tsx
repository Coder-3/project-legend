import type { NextPage } from "next";
import Head from "next/head";
import { Button, createStyles, Image, List, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
  landingPageContainer: {
    maxWidth: theme.breakpoints.md,
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
    justifyContent: "space-evenly",
    marginTop: "100px",
  },

  halfText: {
    width: "400px",
  },

  featureHeading: {
    fontSize: "48px",
  },

  featureCopy: {
    marginTop: "24px",
    fontSize: "24px",
  },

  halfImg: {
    width: "400px",
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
        <h1>What is there was a place...</h1>
        <h2>
          ...where you could play RPGs online with your friends or strangers,
          create your own scenarios and campaigns and be part of a global
          community of RPG fans?
        </h2>
        <Button className={classes.heroButton}>Enter now</Button>
      </div>
      <div className={classes.playRpgsContainer}>
        <div className={classes.halfText}>
          <Title className={classes.featureHeading} order={2}>
            Play your favourite RPGs
          </Title>
          <Text className={classes.featureCopy}>
            Play with others using our virtual tabletop with everything you need
            to play without leaving the platform, from dice to chat.
          </Text>
        </div>
        <div className={classes.halfImg}>
          <Image src="/images/pltri.png" alt="" />
        </div>
        {/* <div>
          <Title order={3}>
            Simple, interoperable and composable story builder suited for the
            simplest to the most complex of stories.
          </Title>
        </div>
        <div>
          <Title order={3}>
            Game board with adjustable grid and fog of war.
          </Title>
        </div>
        <div>
          <Title order={3}>Adjustable game grid density.</Title>
        </div>
        <div>
          <Title order={3}>
            Layer-based world builder. Infinity granularity; infinite scale.
          </Title>
        </div>
        <div>
          <Title order={3}>
            You own your stories. Easy plaintext exports of all assets.
          </Title>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
