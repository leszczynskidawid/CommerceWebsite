import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home/Home";
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

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
