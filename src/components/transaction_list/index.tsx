import React, {useContext} from "react";
import "./styles.scss"
import { TransactionContext } from "../../contexts/transactionContext";

const TransactionList = () => {
    const {transaction} = useContext(TransactionContext)
    console.log(transaction)

    return (
        <div className="list-container">
            <h1>você receberá:</h1>

            <p>Amanhã: R$ {transaction[1]? transaction[1] : "0,00"} </p>
            <p>em 15 dias: R$ {transaction[15]? transaction[1] : "0,00"} </p>
            <p>em 30 dias: R$ {transaction[30]? transaction[1] : "0,00"} </p>
            <p>em 90 dias: R$ {transaction[90]? transaction[1] : "0,00"} </p>

        </div>
    )
}

export default TransactionList