import React from "react";

export interface IInput {
    label:string
    register: any
    errors: any
    name: string
}

export interface ITransaction {
    amount: number
    installments: number
    mdr: number
}