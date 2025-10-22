export const get_storage = () => {
  const data = localStorage.getItem("products");
  try {
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Error al parsear localStorage:", e);
    return [];
  }
};
