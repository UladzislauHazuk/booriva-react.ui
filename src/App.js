import { Route, Routes } from "react-router-dom";
import OrderingPage from "./pages/OrderingPage/OrderingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage"
import BasketPage from "./pages/BasketPage/BasketPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreviewPage></PreviewPage>}></Route>
      <Route path="/category" element={<CategoryPage></CategoryPage>}></Route>
      <Route path="/ordering" element={<OrderingPage></OrderingPage>}></Route>
      <Route path="/basket" element={<BasketPage></BasketPage>}></Route>
      <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
  );
}

export default App;
