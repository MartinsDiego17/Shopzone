import { createPreference } from "./mercado_pago_payment/mercado-pago-payment.js";


export async function handler(event) {

  
  try {
    const body = JSON.parse(event.body);
    const response = await createPreference(body);
    
    return {
      statusCode: 200,
      body: JSON.stringify(response), // ✅ devuelve JSON válido
    };
  } catch (error) {
    console.error("Error en create_preference:", error);

    return {
      statusCode: 500,  
      body: JSON.stringify({ error: error.message }), // ✅ también devuelve JSON válido
    };
  }
}
