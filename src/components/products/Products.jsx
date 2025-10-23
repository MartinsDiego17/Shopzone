import { useState } from "react";
import { categorias } from "../../const/filters-orders";
import { CardProduct } from "../CardProduct/CardProduct";
import "./products.css";

export const Products = ({ handle_search, handle_category, handle_order, list, handle_set_item_storage, valueSearch }) => {

    const [isDisabled, setIsDisabled] = useState(false);

    const handle_local_set_item = (product) => {
        handle_set_item_storage(product);
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 2000);
    }

    return (
        <div className="products-container">
            <h1 id="productos">NUESTROS PRODUCTOS</h1>
            <section className="options-products">

                <article className="filters-and-orders">
                    <input value={valueSearch} onChange={handle_search} placeholder="Remera negra, auriculares..." />
                    <div className="selector-functions">
                        <select onChange={handle_category}>
                            {
                                categorias.map(category => {

                                    return (
                                        <option value={category} key={category}>
                                            {category}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <select onChange={handle_order}>
                            <option value="sin orden">Sin orden</option>
                            <option value="barato">Más barato</option>
                            <option value="caro">Más caro</option>
                        </select>
                    </div>
                </article>

                <article className="card-grids">
                    {
                        list.length && list.map((product) => {
                            return (
                                <CardProduct
                                    key={product.id}
                                    product={product}
                                    handle_set_item_storage={handle_local_set_item}
                                    isDisabled={isDisabled}
                                />
                            )
                        })
                    }
                </article>
                {!list.length && <p className="text-empty">No hay productos con ese nombre</p>}
            </section>
        </div>
    )

}