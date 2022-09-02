import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BtnGoBack = () => {
    const location = useLocation();
    const goBack = location.state?.from || '/';

    return (
        <WrapperBtn>
            <LinkStyled to={goBack}>
                Go back
            </LinkStyled>
        </WrapperBtn>
    );
};
export default BtnGoBack;


const WrapperBtn = styled.div`
    margin: 20px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;

const LinkStyled = styled(Link)`
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-shadow: 4px 2px 5px #eb1052;
        &:hover{
            background-color: #eb1052;
            text-shadow: 4px 1px 5px #742234;
            color: #fff;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
                rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
        }
`;