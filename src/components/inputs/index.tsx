import React from "react";
import "./styles.scss"

import { IInput } from "../../interfaces";

const Input = ({label}: IInput) => {
    return (
    <div className="container-input">
        <p>{label}</p>
        <input type="text" />
        {/* {label === "Em quantas parcelas" ? (
            <span>Máximo de 12 parcelas</span>
        ):(
            <></>
        )} */}
    </div>
    )
}

export default Input