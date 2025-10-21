export const filter_products = (list, search) => {

    const filtered_products = list.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    return filtered_products;

};