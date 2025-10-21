import axios from "axios";

export const purchaseTicket = async (items) => {
    const url = import.meta.env.VITE_API_URL + "/api/mercadopago/create_preference";

    const formated_items = [];

    items.forEach(pro => {

        const { title, price } = pro;

        formated_items.push({
            title,
            quantity: 1,
            unit_price: (price + 1.3) * 0.01
        })
    });

    try {
        const { data } = await axios.post(url, { items: formated_items });
        return data;
    } catch (error) {
        console.error("Error al crear preferencia:", error);
        throw error;
    }
};
