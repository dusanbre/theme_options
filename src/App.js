const { useState } = wp.element;

import "./scss/root.scss";

import Nav from "./pages/Nav";
import Typography from "./pages/Typography";
import ButtonMaker from "./pages/ButtonMaker";
import ThemeColor from "./pages/ThemeColor";
import GoogleFonts from "./pages/GoogleFonts";
import CustomFonts from "./pages/CustomFonts";
import CustomCSS from "./pages/CustomCSS";
import PageLayout from "./pages/PageLayout";
import PageSetup from "./pages/PageSetup";

const App = () => {
  const [route, setRoute] = useState();
  const routes = {
    default: () => {
      return <ThemeColor />;
    },
    themeColor: () => {
      return <ThemeColor />;
    },
    buttonMaker: () => {
      return <ButtonMaker />;
    },
    typography: () => {
      return <Typography />;
    },
    googleFonts: () => {
      return <GoogleFonts />;
    },
    customFonts: () => {
      return <CustomFonts />;
    },
    customCss: () => {
      return <CustomCSS />;
    },
    pageLayout: () => {
      return <PageLayout />;
    },
    pageSetup: () => {
      return <PageSetup />;
    },
  };
  const render = routes[route] || routes.default;
  return (
    <div className="anps-tmop-root">
      <Nav setRoute={setRoute} />
      {render()}
    </div>
  );
};
export default App;
