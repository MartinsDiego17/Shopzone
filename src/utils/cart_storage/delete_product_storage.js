import { get_storage } from "./get_storage";

export const delete_product_storage = (productId) => {

    const all_products = get_storage();
    const filtered_products = all_products.filter(product => product.id !== productId);
    localStorage.setItem("products", JSON.stringify(filtered_products));
    return filtered_products;

}