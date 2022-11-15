import React, {useContext} from "react";
import Input from "../inputs";
import "./styles.scss"

import {useForm} from "react-hook-form"
import { ITransaction } from "../../interfaces";
import { TransactionContext } from "../../contexts/transactionContext";
import api from "../../services";

const Form = () => {

    const {setTransaction} = useContext(TransactionContext)
    
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm<ITransaction>({})

    const submitFunction = (data: ITransaction) => {
        api
            .post("", data)
            .then((res) => {
                setTransaction(res.data)
            })
            .catch((err) => console.log(err))
    }
    


    return (
        <form onSubmit={handleSubmit(submitFunction)}>
            <div className="container-input">
                <p>Informe o valor da venda *</p>
                <input type="number" {...register("amount")}/>
            </div>
            <div className="container-input">
                <p>Em quantas parcelas *</p>
                <input type="number" {...register("installments")}/>
            </div>
            <div className="container-input">
                <p>Informe o percentual de MDR *</p>
                <input type="number" {...register("mdr")}/>
            </div>

            <button type="submit"></button>
        </form>
    )
}

export default Form