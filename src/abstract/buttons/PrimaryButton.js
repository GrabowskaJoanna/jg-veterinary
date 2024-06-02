import React from 'react';
import {Link} from "react-router-dom";

const PrimaryButton = ({text, className, onClick}) => {
    return (
        <>
        <button className={className} onClick={onClick}>{text}</button>
        </>
    );
};

export default PrimaryButton;