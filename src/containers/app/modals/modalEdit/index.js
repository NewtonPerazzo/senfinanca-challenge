import { Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import editTransaction from "../../../../api/update";

import ButtonSave from "../../../../pageComponents/buttonSave";

export default function ModalEditTransaction(props){
    const { 
        showModal, 
        handleShowModal, 
        transaction, 
        setData, 
        handleRefresh 
    } = props;
    const [form] = Form.useForm();

    const { Option } = Select;

    useEffect(() => {
        form.setFieldsValue(transaction)
      }, [transaction])

    const handleEdit = async (values) => {
        values.id = transaction?.id;
        values.value = parseFloat(values.value);
        await editTransaction(values);
        form.resetFields();
        handleRefresh();
    };

    return(
        <Modal
            title={"Editar Transação"}
            visible={showModal}
            onCancel={() => { handleShowModal(); }}
            footer={false}
            destroyOnClose={true}
        >
            <Form 
                form={form}
                onFinish={handleEdit} 
            >
                <Form.Item
                    name={"name"}
                    label={"Nome da Transação"}
                    rules={[
                        { required: true, message: "Por favor, insira o nome da transação." },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    name={"type"}
                    label={"Tipo da Transação"}
                    rules={[
                        { required: true, message: "Por favor, insira o tipo da transação." },
                    ]}
                >
                    <Select 
                        allowClear 
                        showSearch
                        optionFilterProp="children"
                        filterOption={(value, option) =>
                            option?.children?.toLowerCase().indexOf(value?.toLowerCase()) >= 0
                        }
                        filterSort={(a, b) =>
                            a?.children?.toLowerCase().localeCompare(b?.children?.toLowerCase())
                        }
                    >
                        <Option value={"Entrada"}>Entrada</Option>
                        <Option value={"Saída"}>Saída</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item
                    name={"category"}
                    label={"Categoria"}
                    rules={[
                        { required: true, message: "Por favor, insira a categoria da transação." },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    name={"value"}
                    label={"Valor da Transação"}
                    rules={[
                        { required: true, message: "Por favor, insira o valor da transação." },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>

                <Form.Item>
                    <ButtonSave htmlType="submit">
                        Editar
                    </ButtonSave>
                </Form.Item>
            </Form>
        </Modal>
    );
};