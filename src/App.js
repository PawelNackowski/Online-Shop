import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  toAbout,
  toContact,
  toHome,
  toLogin,
  toProductDetails,
  toProducts,
  toRegister,
} from "./common/Header/Navigation/routes";
import { Page } from "./common/Page";
import { PageHome } from "./features/PageHome";
import { PageProducts } from "./features/PageProducts";
import { PageAbout } from "./features/PageAbout";
import { PageContact } from "./features/PageContact";
import { Header } from "./common/Header";
import { LoginPage } from "./features/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={toHome()} element={<Page body={<PageHome />} />} />
          <Route
            path={toProducts()}
            element={<Page body={<PageProducts />} />}
          />
          <Route path={toAbout()} element={<Page body={<PageAbout />} />} />
          <Route path={toContact()} element={<Page body={<PageContact />} />} />
          <Route
            path={toLogin()}
            element={<Page body={<LoginPage/>} />}
          />
          <Route
            path={toRegister()}
            element={<Page body={<div>Register Page</div>} />}
          />
          <Route
            path={toProductDetails(":productId")}
            element={<Page body={<div>Product Details Page</div>} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
