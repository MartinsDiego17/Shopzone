import { Carrito } from "../components/cart/Carrito"

export const Cart = ({ list_products_storage, handle_delete, handle_purchase }) => {

    return (
        <Carrito list_products_storage={list_products_storage} handle_delete={handle_delete} handle_purchase={handle_purchase} />
    )
}