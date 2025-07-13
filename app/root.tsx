import { LinksFunction } from "@remix-run/node";
import {
    Links,
    Meta,
    NavLink,
    Outlet,
    Scripts,
} from "@remix-run/react";

import styles from "./styles.css?url";

import logo from "./images/windowhouse_logo.png";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];


export default function App() {
    return (
        <html>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <nav className="nav nav--fixed">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/">Home</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/about">About</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/gallery">Gallery</NavLink>
                        </li>
                    </ul>
                </nav>
                <Outlet />
                <footer className="footer">
                    <img className="footer__logo" src={logo} alt="Windowhouse Logo" />
                    <div className="footer__contact">
                        <p><strong>Email:</strong> contact@example.com</p>
                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p><strong>Address:</strong> 123 Main St, City, Country</p>
                    </div>
                    <div>
                        <p>contact me</p>
                    </div>
                </footer>
                <Scripts />
            </body>
        </html>
    );
}

