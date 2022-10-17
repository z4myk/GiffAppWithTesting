import React, {useState} from 'react'
import PropType from 'prop-types'
 export const AddCategory = ({addCategory, handleReset }) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = ({ target }) => {

        setInputValue(target.value)

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length < 1) return;
        addCategory(inputValue.trim())

        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit} aria-label='form'>
            <input
            className="form-control w-100 bg-dark text-light shadow-none inputForm"
            type='text'
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={handleInputChange}

            />
           
        </form>
    )
}


AddCategory.propType = {
    AddCategory: PropType.func.isRequired,
}