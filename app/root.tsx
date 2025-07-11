import { LinksFunction } from "@remix-run/node";
import {
    Links,
    Meta,
    NavLink,
    Outlet,
    Scripts,
} from "@remix-run/react";

import appStylesHref from "./app.css?url"

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
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
                <Scripts />
            </body>
        </html>
    );
}

