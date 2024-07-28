import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #A9594E;
    height: 85px;
    display: flex;
    justify-content: center;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #A9594E;
    background-color: #F3EFD8;
    margin: 10vw;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 60%;
    cursor: pointer;
    transition: 0.2s;
    &.active {
        color: #9A9988;
    }
    &: hover {
        background-color: #C7A29D;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

