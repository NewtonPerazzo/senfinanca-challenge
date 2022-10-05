import { useEffect, useState } from "react";
import { UpCircleTwoToneStyled, DownCircleTwoToneStyled, DollarCircleTwoToneStyled } from "../../containers/styledIcons";
import { Container, Content, TextItem } from "./style";

export const loadInput = (data) => {
    let inputAux = 0;
    data?.forEach((element) => {
        if(element.type === "Entrada"){
            inputAux += element.value;
        }
    });
    return inputAux;
};

export const loadOuput = (data) => {
    let loadOuput = 0;
    data?.forEach((element) => {
        if(element.type === "Saída"){
            loadOuput += element.value;
        }
    });
    return loadOuput;
};

export const loadTotal = (input, output) => {
    return input - output;
}

export default function MySpaceContainer(props){
    const { data } = props;
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setInput(loadInput(data));
        setOutput(loadOuput(data));
        setTotal(loadTotal(input, output));
    }, [data, input, output]);

    return(
        <Container>
            <Content>
                <UpCircleTwoToneStyled twoToneColor={"#00ff00"} />
                <TextItem>Entradas: R$ {input.toFixed(2)}</TextItem>
            </Content>
            <Content>
                <DownCircleTwoToneStyled twoToneColor={"#ff0000"} />
                <TextItem>Saídas: R$ {output.toFixed(2)}</TextItem>
            </Content>
            <Content>
                <DollarCircleTwoToneStyled twoToneColor={total > 0 ? "#00ff00" : "#ff0000"} />
                <TextItem>Saldo: R$ {total.toFixed(2)}</TextItem>
            </Content>
        </Container>
    );
};