import { sections } from "../../const/sections";
import "./sectionslist.css";

import { Link, useLocation } from "react-router"


export const SectionList = ({ cant_products }) => {

    const location = useLocation();

    const handle_scroll = () => {
        window.scrollTo(0,0);
    }

    if(location.pathname !== "/") return null;

    return (

        <ul className="list-sections">
            {
                sections.map(section => {

                    return section !== "inicio"
                        ? (<a key={section} href={`#${section}`}><li>{section.toUpperCase()}</li></a>)
                        : (<a key={section} onClick={handle_scroll}><li>{section.toUpperCase()}</li></a>)

                }
                )
            }

            <li>
                <Link to="/cart">
                    CARRITO ({cant_products})
                </Link>
            </li>
        </ul>
    )

};