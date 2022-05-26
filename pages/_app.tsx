import { AppProps } from "next/app";
import Head from "next/head";
import {
  AppShell,
  Header,
  Anchor,
  useMantineTheme,
  MantineProvider,
  createStyles,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme, _params) => ({
  mdNavLinks: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const theme = useMantineTheme();
  theme.colorScheme = "dark";

  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          primaryColor: "green",
        }}
      >
        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          }}
          fixed
          header={
            <Header height={70} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div className={classes.mdNavLinks}>
                  <Link href="/" passHref>
                    <Anchor>Project Legend</Anchor>
                  </Link>
                  <Link href="/blog" passHref>
                    <Anchor>Blog</Anchor>
                  </Link>
                </div>
              </div>
            </Header>
          }
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
