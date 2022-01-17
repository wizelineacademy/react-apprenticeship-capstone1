import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../providers/Auth';
import { AddCategoryInput } from '../../theme/components/ListVideos/ListVideos.styles';

function AddCategory() {
    const [inputValue, setInputValue] = useState('wizeline');
    const { setCategory } = useAuth();
    console.log(useAuth());
    const handleInputChange = (e) => {
        //console.log(e);
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory(() => inputValue);
            setInputValue('')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <AddCategoryInput
                className="navbar-text navbar-subtitle-input"
                placeholder='Search'
                type="text"
                value={inputValue}
                onChange={handleInputChange} 
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory;
/*
<form action="">
    <input type="text" placeholder="Search.." name="search"/>    
</form>
*/

