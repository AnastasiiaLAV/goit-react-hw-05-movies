import { PacmanErrorSpan } from "components/Loader/Loader.styled";
import { PacmanLoader } from "react-spinners";

const Error = () => {
    return (
        <>
        <p>...Posts load failed
            <PacmanErrorSpan>
                <PacmanLoader color="#eb1052" size={10}/>
            </PacmanErrorSpan>
        </p>
        </>

    );
}

export default Error;



