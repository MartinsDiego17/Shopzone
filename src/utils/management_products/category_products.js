import { converse_category } from "./converse_category";
import { order_products } from "./order_products";

export const category_products = (list, category, currentOrder) => {

    const final_category = converse_category(category);
    const filtered_products = list.filter(product => product.category.toLowerCase() === final_category.toLowerCase());

    if (currentOrder === "sin orden") {
        if (category === "Todas") return list;
        return filtered_products;
    }
    else {
        const ordered_products = order_products(filtered_products, currentOrder, category);
        return ordered_products;
    }


};