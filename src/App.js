import Header from "./pageComponents/header";
import 'antd/dist/antd.css'; 
import "./App.css";
import { TableStyled } from "./pageComponents/tableCustom/style";
import { Container } from "./containers/app";
import { ContainerActions } from "./pageComponents/containerFilters";
import { useEffect, useState } from "react";
import getTransactions from "./api/get";


function App() {
  const [data, setData] = useState([]);

  const columns = [
    {
      key: 1,
      title: "Transação",
      dataIndex: "name",
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
  ];



  useEffect(() => {
    try {
      const res = getTransactions();
      setData(res);
      console.log(data)
    } catch(error){
      console.log(error);
    }
  }, []);


  return (
    <div>
      <Header />
      <ContainerActions data={data} setData={setData} />
      <Container>
        <TableStyled columns={columns} dataSource={data} bordered />
      </Container>
    </div>
  );
}

export default App;
