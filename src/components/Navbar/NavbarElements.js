import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #A9594E;
    height: 85px;
    display: flex;
    justify-content: center;
    /* padding: 0.2rem calc((100vw - 1000px) / 2); */
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #A9594E;
    background-color: #F3EFD8;
    margin: 10vw;
    border: 1px solid;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 60%;
    cursor: pointer;
    &.active {
        color: #9A9988;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

