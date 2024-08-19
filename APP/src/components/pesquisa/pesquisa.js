import React from "react";


const Pesquisa = ({ value, onChange }) => {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <input
            type="search"
            value={value}
            onChange={handleChange} 
        />
    );
};

export default Pesquisa; 
