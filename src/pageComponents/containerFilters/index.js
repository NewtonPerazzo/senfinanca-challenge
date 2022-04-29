import { PlusCircleOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import { useState } from "react";
import ModalCreateTransaction from "../../containers/app/modals/modalCreate";
import ButtonSave from "../buttonSave";
import { Filters } from "../filters";
import { Container, Content } from "./style";

export function ContainerActions(props){
    const { data, setData, handleRefresh } = props;
    const [showModalCreate, setShowModalCreate] = useState(false);

    const handleShowModalCreate = () => {
        setShowModalCreate(!showModalCreate)
    };

    return(
        <div>
            <Content>
                <ButtonSave onClick={handleShowModalCreate}>
                    <PlusCircleOutlined twoToneColor={"#fff"} style={{marginRight: 5}} />
                    Criar
                </ButtonSave>
            </Content>

            <Container>
                <Filters data={data} setData={setData}/>
            </Container>
            <ModalCreateTransaction 
                handleShowModal={handleShowModalCreate} 
                handleRefresh={handleRefresh}
                showModal={showModalCreate}
                setData={setData} 
            />
        </div>
    );
}