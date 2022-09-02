import React from 'react';
import { PacmanLoader } from "react-spinners";
import { Wrapper } from './Loader.styled';


function Loader() {
  return (
    <Wrapper>
      <PacmanLoader
        color="#eb1052"
        cssOverride={{}}
        margin={2}
        size={20}
        speedMultiplier={4}
      />
    </Wrapper>
  );
}

export default Loader;