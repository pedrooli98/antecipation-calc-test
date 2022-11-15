import React from "react";
import "./styles.scss"

import Form from "../../components/form";
import TransactionList from "../../components/transaction_list";

const Dashboard = () => {

    return(
        <div className="dashboard-container">

            <div className="content-container">
                <h1>Simule sua Antecipação</h1>
                <Form/>
            </div>

            <div className="content-list-container">
                <TransactionList/>
            </div>
        </div>
    )
}

export default Dashboard