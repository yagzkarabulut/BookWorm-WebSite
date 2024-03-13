import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import Novel from "./pages/Novel";
import Story from "./pages/Story";

function App() {
  const [count, setCount] = useState(0);

  return (
    // tarayıcıdaki url göre sayfalama yapmamızı sağlar
    <BrowserRouter>
      {/* bütün sayfada ortak olucak bileşenleri Routes dışına yazarız. */}
      <div className="page">
        <Header />
        {/*
         *tarayıcıdaki url izler ve url her değistiğinde
         * tanımladığımız routelardan birinin parh değeri ile eşlersirse
         * ekrana o route elementini basar
         */}

        <Routes>
          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<Story />} />
            <Route path="roman" element={<Novel />} />
          </Route>
          {/*
           * Route: Projedeki her sauga için tanımlanır
           * Route'a yol ve o yol için ekrana basılcak bileşeni verir
           */}
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductPage />} />
          {/* dinamik sayfalama */}
          <Route path="/ürün/:id" element={<ProductDetail />} />

          {/* nested rouytes > iç içe yollar */}

          {/* tanımsız bir route'e tönlernir */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
