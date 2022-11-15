import * as yup from "yup";

const transactionSchema = yup.object({
    amount: yup
        .number()
        .required("Este campo é obrigatório"),
    installments: yup
        .number()
        .required("Este campo é obrigatório")
        .max(12, "Máximo de 12 parcelas"),
    mdr: yup
        .number()
        .required("Este campo é obrigatório")
})

export default transactionSchema