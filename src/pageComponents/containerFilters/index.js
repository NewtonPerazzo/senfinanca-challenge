import { useState } from "react";
import ModalCreateTransaction from "../../containers/app/modals/modalCreate";
import ButtonSave from "../buttonSave";
import { Filters } from "../filters";
import { Container, Content } from "./style";

export function ContainerActions(props){
    const { data, setData } = props;
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal)
    };

    return(
        <div>
            <Content>
                <ButtonSave onClick={handleShowModal}>
                    Criar
                </ButtonSave>
            </Content>

            <Container>
                <Filters data={data} setData={setData}/>
            </Container>
            <ModalCreateTransaction handleShowModal={handleShowModal} showModal={showModal} />
        </div>
    );
}