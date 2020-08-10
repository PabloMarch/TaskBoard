import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title key="title">Saturn Tasks Board Test</title>
      <meta name="description" content="Images Tasks Board on ReactJS" />
    </Head>
    <>
      {children}
    </>
  </>
);

export default Layout;