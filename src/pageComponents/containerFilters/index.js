import { useState } from "react";
import ModalCreateTransaction from "../../containers/app/modals/modalCreate";
import ButtonSave from "../buttonSave";
import { Filters } from "../filters";
import { Container } from "./style";

export function ContainerActions(){
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal)
    };

    return(
        <div>
            <Container>
                <Filters />
            </Container>
            <ButtonSave onClick={handleShowModal}>
                Criar
            </ButtonSave>

            <ModalCreateTransaction handleShowModal={handleShowModal} showModal={showModal} />
        </div>
    );
}