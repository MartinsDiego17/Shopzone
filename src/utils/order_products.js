export const order_products = (list, operator) => {
  let sorted_products = [];

  if (operator === "barato") {
    sorted_products = [...list].sort((a, b) => a.price - b.price);
  } else {
    sorted_products = [...list].sort((a, b) => b.price - a.price);
  }

  return sorted_products;
};
