import React, {useState} from 'react';

const TextField = ({type, name, text}) => {

    return (
        <label>{text}
            <input type={type} name={name}/>
        </label>
    );
};

export default TextField;