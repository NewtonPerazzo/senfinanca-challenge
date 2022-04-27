import { Select } from "antd";
import { SelectCustom, Container } from "./style";

export function Filters(){
    const { Option } = Select; 
    return(
        <Container>
            <SelectCustom 
                placeholder="Transação"
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
                <Option value={"Transação 1"}>Transação 1</Option>
                <Option value={"Transação 2"}>Transação 2</Option>
                <Option value={"Transação 3"}>Transação 3</Option>
            </SelectCustom>

            <SelectCustom 
                placeholder="Tipo de transação"
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
            </SelectCustom>
            
            <SelectCustom 
                placeholder="Categoria"
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
            </SelectCustom>
        </Container>
    );
};