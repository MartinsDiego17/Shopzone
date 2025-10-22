import "./notfound.css";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            <h1>Parece que esta ruta no existe</h1>
            <button onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
    )
};