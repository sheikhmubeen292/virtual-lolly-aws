import "../styles/styles.scss";

import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

import awsExports from "../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Virtual Lollipops for all!</title>
      </Head>
      <div className="container">
        <header>
          <h1 className="title">
            <Link href="/">virtual lollipop</Link>
          </h1>
          <p className="subtitle">
            because we all know someone <br />
            who deserves some sugar.
          </p>
        </header>
        <Component {...pageProps} />
        <footer>
          <p>
            Built and hosted with <a href="https://aws.amazon.com/">AWS</a> by{" "}
            <a href="https://twitter.com/GroovierHen">Talha</a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
