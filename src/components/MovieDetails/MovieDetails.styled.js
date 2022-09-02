import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TitleH2 = styled.h2`
    text-align: center;
    margin: 20px 0px;
`;

export const DivCard = styled.div`
    display: flex;
    margin-left: 15px;
    margin-bottom: 15px;
`;

export const Image = styled.img`
    object-fit: cover;
    height: auto;
    border-radius: 5px;
    max-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
                rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
`;

export const DivText = styled.div`
    max-width: 600px;
    margin-left: 20px;
    padding: 10px;
`;

export const CardTitle = styled.h1`
    margin-bottom: 30px;
`;

export const Text = styled.p`
    font-size: 26px;
    margin-bottom: 10px;
`;

export const DivLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 5px;
    text-shadow: 4px 2px 5px #eb1052;
    color: black;
    margin-left: 40px;
        :not(:last-child) {
            margin-left: 0;
        }
        &:hover{
            background-color: #eb1052;
            text-shadow: 4px 1px 5px #742234;
            color: #fff;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
                rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
        }
        &.active{
        background-color: #eb1052;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
    }
`;