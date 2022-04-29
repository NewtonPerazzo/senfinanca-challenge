import { useEffect, useState } from "react";
import { Container, TextItem } from "./style";

export default function MySpaceContainer(props){
    const { data } = props;
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const loadValues = () => {
            let inputAux = 0;
            let outputAux = 0;
            let totalAux = 0;
            data?.map((element) => {
                if(element.type === "Entrada"){
                    inputAux += element.value;
                }
                if(element.type === "Saída"){
                    outputAux += element.value;
                }
            });
            totalAux = inputAux - outputAux;
            setInput(inputAux);
            setOutput(outputAux);
            setTotal(totalAux);
        };
        loadValues();
    }, [data]);

    return(
        <Container>
            <TextItem>Entradas: R$ {input.toFixed(2)}</TextItem>
            <TextItem>Saídas: R$ {output.toFixed(2)}</TextItem>
            <TextItem>Saldo: R$ {total.toFixed(2)}</TextItem>
        </Container>
    );
};