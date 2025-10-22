import { useEffect, useState, useRef } from "react";
import { filter_products } from "../utils/management_products/filter_products";
import { fetch_products } from "../utils/management_products/fetch_products";
import { category_products } from "../utils/management_products/category_products";
import { order_products } from "../utils/management_products/order_products";

import { Presentation } from "../components/presentation/Presentation";
import { Products } from "../components/products/Products";
import { ModalCart } from "../components/ModalCart/ModalCart";

export const Home = ({ handle_set_item_storage }) => {

  const [allProducts, setAllProducts] = useState([]);
  const [localeProducts, setLocaleProducts] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetch_products();
      setLocaleProducts(products);
      setAllProducts(products);
    };

    loadProducts();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handle_search = (event) => {
    const { value } = event.target;

    clearTimeout(timeoutRef.current);

    clearTimeout();
    timeoutRef.current = setTimeout(() => {
      const filtered = filter_products(allProducts, value);
      setLocaleProducts(filtered);
    }, 500);
  };
  const handle_category = (event) => {

    const category = event.target.value;

    const filtered = category_products(allProducts, category);
    setLocaleProducts(filtered);
  };
  const handle_order = (event) => {
    const operator = event.target.value;

    const ordered = order_products(allProducts, operator);
    setLocaleProducts(ordered);
  };

  return (
    <div id="inicio">
      <Presentation />
      <Products
        handle_search={handle_search}
        handle_category={handle_category}
        handle_order={handle_order}
        list={localeProducts}
        handle_set_item_storage={handle_set_item_storage}
      />
    </div>
  )
}