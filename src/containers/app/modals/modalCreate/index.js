import { Form, Input, Modal, Select } from "antd";
import ButtonSave from "../../../../pageComponents/buttonSave";

export default function ModalCreateTransaction(props){
    const { showModal, handleShowModal } = props;
    const [form] = Form.useForm();

    const { Option } = Select;

    const handleSave = (values) => {
        console.log(values);
    };

    return(
        <Modal
            title={"Criar Transação"}
            visible={showModal}
            onCancel={handleShowModal}
            footer={false}
        >
            <Form form={form} onFinish={handleSave} onAbort={form.resetFields()}>
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
                            option.children.toLowerCase().indexOf(value.toLowerCase()) >= 0
                        }
                        filterSort={(a, b) =>
                            a.children.toLowerCase().localeCompare(b.children.toLowerCase())
                        }
                    >
                        <Option value={"input"}>Entrada</Option>
                        <Option value={"output"}>Saída</Option>
                        <Option value={"inputAndOutput"}>Entrada/Saída</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item
                    name={"category"}
                    label={"Categoria"}
                    rules={[
                        { required: true, message: "Por favor, insira a categoria da transação." },
                    ]}
                >
                    <Select
                        allowClear 
                        showSearch
                        optionFilterProp="children"
                        filterOption={(value, option) =>
                            option.children.toLowerCase().indexOf(value.toLowerCase()) >= 0
                        }
                        filterSort={(a, b) =>
                            a.children.toLowerCase().localeCompare(b.children.toLowerCase())
                        }
                    >
                        <Option value={"pix"}>Pix</Option>
                        <Option value={"invoice"}>Pagamento de boleto</Option>
                        <Option value={"salary"}>Recebimento de salário</Option>
                    </Select>
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
                        Salvar
                    </ButtonSave>
                </Form.Item>
            </Form>
        </Modal>
    );
};