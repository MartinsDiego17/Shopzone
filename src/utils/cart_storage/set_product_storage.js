export const set_product_storage = (product) => {

    const current_products = JSON.parse(localStorage.getItem("products"));

    if (!current_products) {
        localStorage.setItem("products", JSON.stringify([product]));
        return { error:false };
    }

    const filtered = current_products.find(pro => pro.id === product.id);
    if (filtered) return { error: true }

    const updated_products = [...current_products, product];

    localStorage.setItem("products", JSON.stringify(updated_products));
    return { error:false }

}
