import { Preference } from "mercadopago";
import { client } from "../../../server/create_preference/preference.js";

const local_process = process.env;

const local_urls = {
    success_url: local_process.PROD_SUCCESS_URL,
    failure_url: local_process.PROD_FAILURE_URL,
    pending_url: local_process.PROD_PENDING_URL
};

const { success_url, failure_url, pending_url } = local_urls;

const preference = new Preference(client);

export const createPreference = async (req) => {

    try {

        const response = await preference.create({
            body: {
                items: req.items,
                back_urls: {
                    success: success_url,
                    failure: failure_url,
                    pending: pending_url
                },
                auto_return: "approved"
            }
        })

        return response;
    } catch (error) {
        return error;
    }
}; 