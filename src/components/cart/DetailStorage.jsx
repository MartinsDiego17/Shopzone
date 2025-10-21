export const DetailStorage = ({ product_detail, handle_purchase }) => {

    return (
        <div className="detail-storage-container">
            <h2>Resumen de compra</h2>

            <p>
                <span>Productos ({product_detail.cant})</span>
                <span>{product_detail.total_price.toFixed(2)}$</span>
            </p>

            <p>
                <span>Envios ({product_detail.cant})</span>
                <span>{(product_detail.cant * (1.3)).toFixed(2)}$</span>
            </p>

            <h1>
                <span>TOTAL</span>
                <span>
                    {
                        (product_detail.total_price + product_detail.cant * (1.3)).toFixed(2)
                    }$
                </span>
            </h1>

                    <button onClick={() => handle_purchase()}>Continuar compra</button>

        </div>
    )
}