export const clean_storage = () => {
    localStorage.setItem("products", JSON.stringify([]));
};