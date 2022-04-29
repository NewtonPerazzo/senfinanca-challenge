import { Container } from "./style";

export default function ButtonSave(props) {
    const { onClick, children } = props;
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
};