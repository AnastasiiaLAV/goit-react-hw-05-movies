import {useState} from "react";
import { BsSearch } from 'react-icons/bs'
import PropTypes from 'prop-types';

import {Searchbar, SearchForm, SearchFormBtn,SearchFormBtnLable,SearchFormInput} from './Searchbar.styled.js'

export default function Serchbar({onSubmitForm}) {
    const [state, setState] = useState({query:''});

    const handleNameChange = ({currentTarget}) => {
        console.log('target', currentTarget.value);
        const {name, value} = currentTarget;
        setState({
            ...state,
            [name]: value,
            });
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSubmitForm({...state});
        setState({query:''});
    }
    
    return (
    <Searchbar>
        <SearchForm  onSubmit={handleSubmit}>
            <SearchFormBtn type="submit" >
                <BsSearch/>
            <SearchFormBtnLable>Search</SearchFormBtnLable>
            </SearchFormBtn>

            <SearchFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={state.query}
            onChange={handleNameChange}
            required
            />
        </SearchForm>
    </Searchbar>
    )
}

Serchbar.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    };
