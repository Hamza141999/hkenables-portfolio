import "../styles/globals.css";
import { ThemeProvider } from "../contextAPI";
import { useTheme } from "../contextAPI";

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}
