import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory=({setCat})=>{

    const [InputValue,setInputValue]= useState('Hola Mundo');

    const handleChange=(e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(InputValue.trim().length>2){
            setCat(cats=>[InputValue,...cats]);
            setInputValue('');
        }  
    }


    
    return(
        <form onSubmit={handleSubmit}>
            <h1>{InputValue}</h1>
           <input 
            type="text"
            value={InputValue}
            onChange={handleChange}
           />
        </form>
    )
}


AddCategory.propTypes={
    setCat: PropTypes.func.isRequired
}