export const set_is_buyer = (purchase_id) => {

    console.log("ID RECIBIDO: ", purchase_id);

    const today = new Date();
    const dateBuy = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;

    const purchaseData = {
        buyId: purchase_id,
        isBuyer: true,
        dateBuy,
    };

    localStorage.setItem("purchase", JSON.stringify(purchaseData));
};
