import { Container } from "./style";

export default function ButtonSave(props) {
    const { onClick } = props;
    return (
        <Container onClick={onClick}>
            Criar transação
        </Container>
    )
};