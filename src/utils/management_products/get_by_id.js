import { fetch_products } from "./fetch_products";

export const get_by_id = async (productId) => {

    const all_products = await fetch_products();
    const product_find = all_products.find(pro => Number(pro.id) === Number(productId));
    
    return product_find;
}