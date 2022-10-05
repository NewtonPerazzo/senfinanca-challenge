
import { Space } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { TableStyled } from "./style";

import moment from "moment";

export function TableMainData(props){
    const { 
        data,
        handleShowModalEdit,
        handleShowModalDelete
     } = props;

    const columns = [
        {
          key: 1,
          title: "Transação",
          dataIndex: "name",
          defaultSortOrder: 'ascend',
          sorter: (a, b) => a?.name?.localeCompare(b?.name),
        },
        {
          key: 2,
          title: "Valor da Transação",
          dataIndex: "value",
          align: "center",
          sorter: (a, b) => a?.value - b?.value,
          render: (_, record) => (
            <p>R$ {record?.value?.toFixed(2)}</p>
          )
        },
        {
          key: 3,
          title: "Tipo da Transação",
          dataIndex: "type",
        },
        {
          key: 4,
          title: "Categoria da Transação",
          dataIndex: "category",
        },
        {
          key: 5,
          title: "Data de criação",
          dataIndex: "created_at",
          render: (record) => (
            <p>{moment(record?.created_at).format("DD/MM/YYYY")}</p>
          )
        },
        {
          key: 5,
          align: "center",
          render: (record) => (
            <Space>
              <EditTwoTone 
                twoToneColor="orange" 
                onClick={() => handleShowModalEdit(record)} 
                alt="edit"
              />
              <DeleteTwoTone 
                twoToneColor="red" 
                onClick={() => handleShowModalDelete(record)}
                alt="delete"
              />
            </Space>
          ),
        }
      ];

    return (
        <TableStyled 
            columns={columns} 
            dataSource={data}
            pagination={{ pageSize: 5 }} 
            bordered 
        />
    )
}