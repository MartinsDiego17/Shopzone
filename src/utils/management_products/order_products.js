import { converse_category } from "./converse_category";

export const order_products = (list, operator, currentCategory) => {

  let final_list = [...list];
  let sorted_products = [];

  if (currentCategory !== "Todas") {
    const final_category = converse_category(currentCategory);
    final_list = list.filter(product => product.category.toLowerCase() === final_category.toLowerCase());
  }

  if (operator === "barato") {
    sorted_products = final_list.sort((a, b) => a.price - b.price);
  } else {
    sorted_products = final_list.sort((a, b) => b.price - a.price);
  }

  return sorted_products;
};
