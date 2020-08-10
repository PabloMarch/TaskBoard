import Theme from "../components/ui/lib/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp