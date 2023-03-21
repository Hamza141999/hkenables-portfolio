import "../styles/globals.css";
import MainLayout from "../components/layout/index";
import defaultLayout from "../components/layout/default";
import { ThemeProvider } from "../contextAPI";
import { useTheme } from "../contextAPI";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || defaultLayout;

  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
