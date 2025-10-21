import { Preference } from "mercadopago";
import { client } from "../create_preference/preference.js";
import { getEnv } from "../utils/get_env.js";

const local_urls = {
    success_url: getEnv("PROD_SUCCESS_URL"),
    failure_url: getEnv("PROD_FAILURE_URL"),
    pending_url: getEnv("PROD_PENDING_URL")
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