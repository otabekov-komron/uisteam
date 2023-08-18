import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import ScrollToTop from "./utils/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Navigation = lazy(() => import("./Navigation"));
const Websitepage = lazy(() => import("./pages/Website"));
const TgBot = lazy(() => import("./pages/TgBot"));
const Application = lazy(() => import("./pages/Application"));
const OnlineShop = lazy(() => import("./pages/OnlineShop"));
const CRM = lazy(() => import("./pages/CRM"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-website" element={<Websitepage />} />
          <Route path="/about-tgbot" element={<TgBot />} />
          <Route path="/about-apps" element={<Application />} />
          <Route path="/about-shop" element={<OnlineShop />} />
          <Route path="/about-crm" element={<CRM />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
