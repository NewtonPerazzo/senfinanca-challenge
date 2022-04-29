import { Form, Modal } from "antd";
import deleteTransaction from "../../../../api/delete";

import ButtonSave from "../../../../pageComponents/buttonSave";

export default function ModalDeleteTransaction(props){
    const { showModal, handleShowModal, setData, data, transaction } = props;
    const [form] = Form.useForm();
    
    const handleDelete = () => {
        deleteTransaction(transaction?.id, data, setData, transaction);
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