import "../../styles/globals.css";
import { Theme as theme } from "../../Config/Theme";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AnimatePresence } from "framer-motion";
import { useTransitionFix } from "../Infrastructure/Hooks/useTransitionFix.utilhook";
import wrapper from "../Infrastructure/Redux/Store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

const App = (props) => {
  const store = useStore((state) => state);
  const { Component, pageProps, router } = props;

  // Animate page transition fix
  const transitionCallback = useTransitionFix();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Envite</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        {/* <meta
          name="viewport"
          content="minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no"
        /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap"
          rel="stylesheet"
        ></link>

        <meta charSet='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />

        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content={theme.palette.primary.main}/>
      </Head>
      <QueryClientProvider client={queryClient}>
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AnimatePresence
              exitBeforeEnter
              onExitComplete={transitionCallback}
            >
              <Component {...pageProps} key={router.route} />
              <style jsx global>{`
                #__next > div {
                  display: initial !important;
                }
              `}</style>
            </AnimatePresence>
          </ThemeProvider>
        </PersistGate>
      </QueryClientProvider>
    </React.Fragment>
  )

}
function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);