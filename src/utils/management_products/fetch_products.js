import axios from "axios";

export const fetch_products = async () => {
    const url = "https://fakestoreapi.com/products";

    try {
        const { data } = await axios(url);
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
};
