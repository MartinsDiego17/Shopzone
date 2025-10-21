import { MercadoPagoConfig } from "mercadopago";

export const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN
});
