import styled from "styled-components";

export const List = styled.ul`
    margin: 20px 30px;
`;

export const Item = styled.li`
    margin: 20px 0px;
    padding: 0 10px 15px 10px;
    border-bottom: 4px solid #eb1052;
    border-radius: 5px;
    filter: grayscale(40%);
    &:hover{
        filter: none;
        transition: 0.3s ease-out;
        transform: scale(1.03);
    }
    font-size: 20px
`;