import { Container, Image, TextHeader, TitleHeader } from "./style";
import logo from "../../assets/images/logo.webp"

export default function Header(){
    return(
        <Container>
            <TitleHeader>SenFinança</TitleHeader>
            <Image src={logo} alt="logo" />
            <TextHeader>Controle sua finança de forma fácil</TextHeader>
        </Container>
    );
}