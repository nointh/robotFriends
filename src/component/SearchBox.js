import React from 'react';
import App from '../container/App'
const SearchBox = ({searchField, searchChange}) =>{
    return (
        <div className = 'pa2'> 
            <input className='b-green bg-lightest-blue  pa3 ba' 
            type='search' 
            placeholder = 'Search robot'
            onChange = {searchChange}
            ></input>
        </div>
    )
}

export default SearchBox;