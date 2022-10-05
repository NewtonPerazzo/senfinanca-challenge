import { Form, Modal } from "antd";
import deleteTransaction from "../../../../api/delete";

import ButtonSave from "../../../../pageComponents/buttonSave";

export default function ModalDeleteTransaction(props){
    const { showModal, handleShowModal, handleRefresh, transaction } = props;
    
    const handleDelete = async () => {
        await deleteTransaction(transaction?.id);
        handleRefresh();
        handleShowModal();
    };

    return(
        <Modal
            title={"Excluir Transação"}
            visible={showModal}
            onCancel={handleShowModal}
            footer={false}
        >
            <p>Tem certeza que deseja excluir a transação {transaction?.name}?</p>
            <ButtonSave onClick={handleDelete}>
                Excluir
            </ButtonSave>
        </Modal>
    );
};