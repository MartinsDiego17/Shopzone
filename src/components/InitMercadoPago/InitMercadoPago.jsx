import { initMercadoPago } from "@mercadopago/sdk-react";

const local_public_key = import.meta.env.VITE_PUBLIC_KEY;


initMercadoPago(import.meta.env[local_public_key]);

export const InitMercadoPago = () => {

    return <></>
}