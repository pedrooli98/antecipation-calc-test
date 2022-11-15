import { createContext, ReactNode, useState } from "react"

import {ITransaction} from "../../interfaces/index"

interface IProps {
    children: ReactNode;
  }

interface IResponse {
    1: number
    15: number
    30: number
    90: number
}

interface ITransactionContextType {
    transaction: IResponse
    setTransaction: (newState: IResponse) => void
}

export const TransactionContext = createContext({} as ITransactionContextType);
export const TransactionProvider = ({children}: IProps) => {

    const [transaction, setTransaction] = useState<IResponse>({} as IResponse) 

    return (
        <TransactionContext.Provider
            value ={{
                transaction,
                setTransaction,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}