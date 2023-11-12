import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../page/Layout";
const Home = lazy(() => import("../page/Home/Home"));
const Catalog = lazy(() => import("../page/Catalog/Catalog"));
const Favorites = lazy(() => import("../page/Favorites/Favorites"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
