import { Route, Routes } from "react-router-dom";
import { Theme } from "../src/Theme/index";
import "react-toastify/dist/ReactToastify.css";
import { ModalWindow } from "./Components/Modals/ModaWindow";
import { CheckoutPage } from "./Page/CheckoutPage/CheckoutPage";
import { Home } from "./Page/Home/Home";
import { ProductCardPage } from "./Page/PorductCardPage";
import { ProductDetailsPage } from "./Page/ProductDetailsPage.js/ProductDetailsPage";
import { ProductsCategoryPage } from "./Page/ProductsCategoryPage.js/ProductsCategoryPage";
import { ContactPage } from "./Page/ConactPage";
import { ToastsMessagesContainer } from "./Components/Toasts";
import { AboutPage } from "./Page/AboutPage";
import { ErrorPage } from "./Page/ErrorPage";

function App() {
  return (
    <Theme>
      <ModalWindow />
      <ToastsMessagesContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/:shopCategory" element={<ProductsCategoryPage />} />
        <Route
          path="/:shopCategory/productDetails/:id"
          element={<ProductDetailsPage />}
        />
        <Route path="/card" element={<ProductCardPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Theme>
  );
}

export default App;
