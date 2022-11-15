import {ReactNode} from "react";
import {TransactionProvider} from "./transactionContext/index"

type Props = {
    children: ReactNode
}

export const Providers = ({children}:Props) => {
    return (
            <TransactionProvider>
                {children}
            </TransactionProvider>        
    )
}
