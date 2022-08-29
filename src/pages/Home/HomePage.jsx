import TrendingMovies from "components/TrendingMovies/TrendingMovies";
import styled from "styled-components";

const HomePage = () => {

    return (
        <div>
            <Title>Trending today</Title>
            <TrendingMovies/>
        </div>

    );
}

export default HomePage;


const Title = styled.h2`
    text-align: center;
`