import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home/Home";
import { ProductCardPage } from "./Page/PorductCardPage";
import { ProductDetailsPage } from "./Page/ProductDetailsPage.js/ProductDetailsPage";
import { ProductsCategoryPage } from "./Page/ProductsCategoryPage.js/ProductsCategoryPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productDetails" element={<ProductDetailsPage />} />
        <Route path="/:shopCategory" element={<ProductsCategoryPage />} />
        <Route
          path="/:shopCategory/productDetails"
          element={<ProductDetailsPage />}
        />
        <Route path="/card" element={<ProductCardPage />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
