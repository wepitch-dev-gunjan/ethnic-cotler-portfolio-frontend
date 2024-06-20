import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { HomeProvider } from "../setup/states";
import ErrorBoundary from "../common/components/errorBoundary";
import { LayoutProvider } from "../setup/states/LayoutContext";
import Home from "../pages/home";
import AboutUs from "../pages/aboutUs";
import OurHistory from "../pages/outHistory";
import Sustainability from "../pages/sustainabilty";
import Gallery from "../pages/gallery";
import Media from "../pages/media";
import ContactUs from "../pages/contactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutProvider>
        <Layout />
      </LayoutProvider>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "home",
        element: (
          <HomeProvider>
            <Home />
          </HomeProvider>
        ),
      },
      {
        path: "about-us",
        element: (
          <AboutUs />
        ),
      },
      {
        path: "our-history",
        element: (
          <OurHistory />
        ),
      },
      {
        path: "sustainability",
        element: (
          <Sustainability />
        ),
      },
      {
        path: "gallery",
        element: (
          <Gallery />
        ),
      },
      {
        path: "media",
        element: (
          <Media />
        ),
      },
      {
        path: "contact-us",
        element: (
          <ContactUs />
        ),
      },
    ],
  },
]);

export default router;
