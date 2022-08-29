import {useState} from "react";
import { BsSearch } from 'react-icons/bs'
import PropTypes from 'prop-types';

import {Searchbar, SearchForm, SearchFormBtn,SearchFormBtnLable,SearchFormInput} from './Searchbar.styled.js'

export default function Serchbar({onSubmitForm}) {
    const [queryImage, setQueryImage] = useState('');

    const handleNameChange = event => {
        setQueryImage(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSubmitForm(queryImage);
        setQueryImage('');
    }
    
    return (
    <Searchbar>
        <SearchForm  onSubmit={handleSubmit}>
            <SearchFormBtn type="submit" >
                <BsSearch/>
            <SearchFormBtnLable>Search</SearchFormBtnLable>
            </SearchFormBtn>

            <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={queryImage}
            onChange={handleNameChange}
            />
        </SearchForm>
    </Searchbar>
    )
}

Serchbar.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    };
