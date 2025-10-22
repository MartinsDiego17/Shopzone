import { useEffect, useState } from "react";
import "./detailproduct.css";
import { useParams, useNavigate } from "react-router-dom";
import { get_by_id } from "../../utils/management_products/get_by_id";

export const DetailProduct = ({ handle_set_item_storage, handle_purchase }) => {

    const { id } = useParams();
    const [localProduct, setLocalProduct] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const fetch_product = async () => {
            const product_find = await get_by_id(id);
            setLocalProduct(product_find)
        };

        fetch_product();

    }, []);

    const handle_local_set_item_storage = () => {
        handle_set_item_storage(localProduct);
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false)
        }, 2000);
    };

    const local_handle_purchase = () => {
        handle_purchase([localProduct]);
    };

    return (
        <>
            {
                localProduct
                    ? (
                        <div className="product-detail-container">
                            <section>

                                <article className="image-detail">
                                    <img src={localProduct.image} />
                                </article>

                                <article className="description-detail">
                                    <h1>{localProduct.title}</h1>
                                    <p className="description">{localProduct.description}</p>
                                    <p className="stock">EN STOCK</p>
                                    <h3>{localProduct.price}$</h3>
                                    <button onClick={local_handle_purchase} className="buy-now">Comprar ahora</button>
                                    <button disabled={isDisabled} className="add-to-cart" onClick={handle_local_set_item_storage}>Agregar al carrito</button>
                                </article>

                            </section>
                        </div>
                    )
                    : (
                        <div className="product-not-found">
                            <h1>El producto que intentas buscar no existe</h1>
                            <button onClick={() => navigate("/")}>Volver a la página principal</button>
                        </div>
                    )
            }
        </>
    )

};