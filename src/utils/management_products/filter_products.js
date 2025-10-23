import { converse_category } from "./converse_category";
import { order_products } from "./order_products";

export const filter_products = (list, search, currentCategory, currentOrder) => {

    if (currentOrder === "sin orden") {

        const final_category = converse_category(currentCategory);
        const filtered_products = list.filter(product => product.title.toLowerCase().trim().includes(search.toLowerCase().trim()));

        if (!final_category.error) {
            const founded_products = filtered_products.filter(pro => pro.category === final_category);
            return founded_products;
        }

        return filtered_products;
    } else {
        const ordered_products = order_products(list, currentOrder, currentCategory);
        const final_list_ordered = ordered_products.filter(product => product.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
        return final_list_ordered;
    }

};