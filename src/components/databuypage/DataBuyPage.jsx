import { useParams, useNavigate } from "react-router";
import "./databuy.css";
import { useEffect, useState } from "react";
/* import { get_data_purchase } from "../../utils/buyer/get_data_purchase"; */

export const DataBuyPage = () => {

    const { status } = useParams();
    const navigate = useNavigate();
    const [localStatus, setLocalStatus] = useState("");
    const [localDataPurchase, setLocalDataPurchase] = useState({
        buyId: 0,
        isBuyer: false,
        dateBuy: ""
    })

    useEffect(() => {

/*         const local_data = get_data_purchase(); */

        const local_data = {
            buyId: 25,
            isBuyer: true,
            dateBuy: "21/10/25"
        }

        if (!local_data.isBuyer) navigate("/");
        setLocalDataPurchase(local_data);

    }, []);

    useEffect(() => {

        switch (status) {
            case "success":
                setLocalStatus("exitosa");
                break;
            case "failure":
                setLocalStatus("fallida");
                break;
            case "pending":
                setLocalStatus("pendiente");
                break;
            default:
                navigate("/");
                break;
        }

    }, []);



    return (
        <div className="status-buy-container">
            <div className="blurred">
                <h1>Información de tu última compra</h1>
                <div className="data-buy">
                    <h3>
                        <span>Identificador</span>
                        <span className="id-buy">{localDataPurchase.buyId}</span>
                    </h3>
                    <h3>
                        <span>Fecha</span>
                        <span>{localDataPurchase.dateBuy}</span>
                    </h3>
                    <h3>
                        <span>Estado</span>
                        <span className={`status-buy ${status}`}>compra {localStatus}</span>
                    </h3>
                </div>
            </div>
        </div>
    )
};