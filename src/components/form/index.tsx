import React from "react";
import Input from "../inputs";

const Form = () => {
    return (
        <form>
                <Input
                    label={"Informe o valor da venda"}
                    />
                <Input
                    label={"Em quantas parcelas"}
                    />
                <Input
                    label={"Informe o percentual MDR"}
                />
        </form>
    )
}

export default Form