import { useParams, useNavigate  } from "react-router";
import "./databuy.css";
import { useEffect, useState } from "react";
import { get_data_purchase } from "../../utils/buyer/get_data_purchase";

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
        const local_data = get_data_purchase();

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
                <button className="button-back" onClick={() => navigate("/")}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </span>
                    <span>volver al inicio</span>
                </button>
            </div>
        </div>
    )
};