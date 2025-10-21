export const get_data_purchase = () => {
    const data_purchase = JSON.parse(localStorage.getItem("purchase"));
    return data_purchase;
};