import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuUl = styled.ul`
margin: 10px;
display: flex;
justify-content: center;
text-align: center;
font-size: 20px;
font-weight: 500;
/* list-style: none; */
`

export const MenuLi = styled.li`
display: inline-block;
margin: 0 20px;
`
export const MenuNavLink = styled(NavLink)`
text-decoration: none;
color: #fff;
padding: 10px 15px;
border-radius: 5px;
    &:hover{
        text-shadow: 4px 1px 5px #f7063be6;
        color: #fff;
    }
    &.active{
        background-color: black;
    }
`
