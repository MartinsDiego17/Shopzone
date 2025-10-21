export const purchaseTicket = async (items) => {
  const formatted_items = [];

  if (!Array.isArray(items)) items = [items];

  items.forEach((pro) => {
    const { title, price } = pro;
    formatted_items.push({
      title,
      quantity: 1,
      unit_price: (price + 1.3) * 0.01,
    });
  });

  try {
    const response = await fetch("/.netlify/functions/create_preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: formatted_items }),
    });
    
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json(); // 👈 se convierte correctamente a JSON
    console.log("RESPONSE: ", data);
    return data;
  } catch (error) {
    console.error("Error al crear preferencia:", error);
    throw error;
  }
};
