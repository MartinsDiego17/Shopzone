import "./cardproduct.css";

import { Link } from "react-router";

export const CardProduct = ({ product, handle_set_item_storage, isDisabled }) => {

    const { title, image, price, description } = product;

    const handle_scroll = () => {
        window.scrollTo(0,0);
    };

    return (
        <div id="card" className="card-container">
            <Link onClick={handle_scroll} to={`/product/${product.id}`}>
                <img src={image} alt={title} />
            </Link>
            <h3>{title.slice(0, 20)}</h3>
            <p>{description.slice(0, 50)}</p>
            <div className="price-and-cart">
                <h5>{price}$</h5>
                <button disabled={isDisabled} onClick={() => handle_set_item_storage(product)}>
                    <span className="cart-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
};