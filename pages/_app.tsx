import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Anchor,
  Aside,
  Text,
  Button,
  MediaQuery,
  Burger,
  useMantineTheme,
  MantineProvider,
} from "@mantine/core";
import Link from "next/link";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

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
          /** Put your mantine theme override here */
          colorScheme: "light",
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
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
                <Link href="/" passHref>
                  <Anchor>Home</Anchor>
                </Link>
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
