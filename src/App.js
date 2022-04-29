import Header from "./pageComponents/header";
import 'antd/dist/antd.css'; 
import "./App.css";
import { TableStyled } from "./pageComponents/tableCustom/style";
import { Container } from "./containers/app";
import { ContainerActions } from "./pageComponents/containerFilters";
import { useEffect, useState } from "react";
import MySpaceContainer from "./pageComponents/mySpaceContainer";
import { Space, Spin } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

import ModalDeleteTransaction from "./containers/app/modals/modalDelete";
import ModalEditTransaction from "./containers/app/modals/modalEdit";
import loadTransactions from "./api/list";


function App() {
  const [data, setData] = useState([]);
  const [transactionSelected, setTransactionSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

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
      align: "center",
      render: (record) => (
        <Space>
          <EditTwoTone twoToneColor="orange" onClick={() => handleShowModalEdit(record)} 
          />
          <DeleteTwoTone twoToneColor="red" onClick={() => handleShowModalDelete(record)}
          />
        </Space>
      ),
    }
  ];

  useEffect(() => {
    loadData(setData);
  }, []);

  const loadData = async (setData) => {
    try {
      const response = await fetch('https://senfinanca-challenge-api.herokuapp.com/api/transactions/');
      const body = await response.json();
      setData(body);
      setLoading(false);
    } catch(error){
      console.log(error);
    }
  }

  const handleRefresh = (setData) => {
    loadTransactions(setData);
  };

  const handleShowModalDelete = (record) => {
    setTransactionSelected(record);
    setShowModalDelete(!showModalDelete);
  };

  const handleShowModalEdit = (record) => {
      setTransactionSelected(record);
      setShowModalEdit(!showModalEdit);
  };

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }


  return (
    <div>
      <Header />
      {
        loading ? (
          <div className="container">
            <Spin />
          </div>
        ) : (
          <>
            <MySpaceContainer data={data} />
            <ContainerActions data={data} setData={setData} handleRefresh={handleRefresh} />
            <Container>
              <TableStyled 
                columns={columns} 
                dataSource={data}
                total={data?.length}
                showTotal={total => `Total: ${data?.length} transação (ões).`} 
                showSizeChanger 
                onShowSizeChange={onShowSizeChange}
                pagination={{ pageSize: 5 }} 
                bordered />
            </Container>
          </>
        )
      }

      <ModalDeleteTransaction 
        transaction={transactionSelected} 
        handleShowModal={handleShowModalDelete} 
        showModal={showModalDelete} 
        data={data} 
        setData={setData} 
      />

      <ModalEditTransaction 
        transaction={transactionSelected} 
        setTransactionSelected={setTransactionSelected}
        handleShowModal={handleShowModalEdit} 
        showModal={showModalEdit}
        setData={setData} 
        handleRefresh={handleRefresh}
      />
    </div>
  );
}

export default App;
