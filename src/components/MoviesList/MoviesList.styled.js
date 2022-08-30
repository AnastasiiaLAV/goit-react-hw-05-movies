import styled from "styled-components";

export const GalleryMovies = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
    grid-gap: 50px 20px;
    justify-items: center;
    list-style: none;
    max-width: calc(100vw - 90px);
    margin: 20px auto;
    border-radius: 5px;
`

export const GalleryMoviesCard = styled.li`
    display: block;     
    width: 100%;
    height: 150px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
    filter: grayscale(40%);
    cursor: pointer;
    text-align: center;
`

export const GalleryMoviesImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
    filter: grayscale(40%);
    cursor: pointer;
    &:hover{
        filter: none;
        transition: 0.3s ease-out;
        transform: scale(1.06);
    }
`