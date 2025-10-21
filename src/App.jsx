

import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { useEffect, useState } from "react";
import { set_product_storage } from "./utils/set_product_storage";
import { get_storage } from "./utils/get_storage";
import { delete_product_storage } from "./utils/delete_product_storage";
import { Detail } from "./pages/Detail";
import { ModalCart } from "./components/ModalCart/ModalCart";
import { InitMercadoPago } from "./components/InitMercadoPago/InitMercadoPago";
import { purchaseTicket } from "./utils/mercadopago/purchase_ticket";
import { set_is_buyer } from "./utils/buyer/set_is_buyer";
import { DataBuy } from "./pages/DataBuy";

function App() {

  const [openModalCart, setOpenModalCart] = useState(false);
  const [textModal, setTextModal] = useState({
    text: "",
    error: false
  });
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    const all_products_cart = get_storage();
    setProductsCart(all_products_cart);
  }, [openModalCart]);

  const handle_set_item_storage = (product) => {
    if (!set_product_storage(product).error) {
      setTextModal({
        text: "Haz agregado el producto al carrito exitosamente",
        error: false
      });
    } else {
      setTextModal({
        text: "Ya tienes este producto en el carrito",
        error: true
      });
    }

    setOpenModalCart(true);
    setTimeout(() => {
      setOpenModalCart(false);
    }, 2000);
  }

  const handle_local_delete = (productId) => {
    setTimeout(() => {
      const new_products = delete_product_storage(productId);
      setProductsCart(new_products)
    }, 1000);
  };

  const handle_purchase_product = async (products) => {
    try {
      const response = await purchaseTicket(products);
      if (response.init_point) set_is_buyer(response.id);
      window.location.href = response.init_point;
    } catch (error) {
      throw new Error(error.message);
    }

  };

  return (
    <>
      <BrowserRouter>

        <InitMercadoPago />

        <Navbar cant_products={productsCart.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handle_set_item_storage={handle_set_item_storage}
              />
            }
          />

          <Route path="/cart" element={
            <Cart list_products_storage={productsCart} handle_delete={handle_local_delete} handle_purchase={handle_purchase_product} />
          } />

          <Route path="/product/:id" element={
            <Detail handle_set_item_storage={handle_set_item_storage} handle_purchase={handle_purchase_product} />
          } />

          <Route path="/statusbuy/:status" Component={DataBuy} />

        </Routes>

        <ModalCart isOpen={openModalCart} textModal={textModal} />

        <Footer cant_products={productsCart.length} />
      </BrowserRouter>
    </>
  );
}

export default App;
