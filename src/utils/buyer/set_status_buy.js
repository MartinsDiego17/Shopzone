import { get_data_purchase } from "./get_data_purchase";

export const set_status_buy = (status_buy) => {

    const current_purchase_data = get_data_purchase();
    const new_purchase_data = {
        ...current_purchase_data,
        statusBuy: status_buy
    }

    localStorage.setItem("purchase", JSON.stringify(new_purchase_data));
    return new_purchase_data;

};