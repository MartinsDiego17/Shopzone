import { useEffect, useState } from "react";
import { CardStorage } from "./CardStorage";
import "./carrito.css";
import { DetailStorage } from "./DetailStorage";
import { EmptyCart } from "./EmptyCart";

export const Carrito = ({ list_products_storage, handle_delete, handle_purchase }) => {

    const [productDetail, setProductDetail] = useState({
        cant: 0,
        total_price: 0
    })

    useEffect(() => {
        const cant = list_products_storage.length;
        let price = 0;
        list_products_storage.forEach(pro => {
            price += pro.price;
        })
        setProductDetail({
            cant,
            total_price: price
        })
    }, [list_products_storage]);


    const local_handle_purchase = () => {
        const data_to_transfer = list_products_storage.length > 1 ? list_products_storage : list_products_storage[0];
        handle_purchase(data_to_transfer);
    };

    return (
        <div className="carrito">
            <div className="carrito-container">
                {
                    !list_products_storage.length
                        ? (<EmptyCart />)
                        :
                        (
                            <section className="cards-and-details">
                                <article className="cards-storage">
                                    {
                                        list_products_storage.map((product/* , index  */) => {
                                            return (
                                                <CardStorage product={product} key={product.id} handle_delete={handle_delete} />
                                            )
                                        })
                                    }
                                </article>
                                <DetailStorage product_detail={productDetail} handle_purchase={local_handle_purchase} />
                            </section>
                        )
                }
            </div>
        </div>
    )
};