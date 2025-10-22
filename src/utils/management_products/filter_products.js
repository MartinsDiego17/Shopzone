export const filter_products = (list, search) => {

    const filtered_products = list.filter(product => product.title.toLowerCase().trim().includes(search.toLowerCase().trim()));
    return filtered_products;

};