import "./title.css"

import { useLocation, Link } from "react-router";

export const Title = () => {

    const location = useLocation();

    if (location.pathname !== "/") {
        return (
            <Link to={"/"}><h1 className="title-text"><span>SHOPZONE</span></h1></Link>
        )
    }

    return (
        <h1 className="title-text"><span>SHOPZONE</span></h1>
    )
};