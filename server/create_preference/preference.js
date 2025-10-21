import { MercadoPagoConfig } from "mercadopago";
import { getEnv } from "../utils/get_env.js";

export const client = new MercadoPagoConfig({
  accessToken: getEnv("ACCESS_TOKEN")
});
