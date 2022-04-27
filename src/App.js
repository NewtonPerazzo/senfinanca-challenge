import Header from "./pageComponents/header";
import 'antd/dist/antd.css'; 
import "./App.css";
import { TableStyled } from "./pageComponents/tableCustom/style";
import { Container } from "./containers/app";
import { ContainerActions } from "./pageComponents/containerFilters";

function App() {
  const columns = [
    {
      key: 1,
      title: "Transação",
      dataIndex: "name",
    },
    {
      key: 2,
      title: "Valor da Transação",
      dataIndex: "value",
    },
  ];

  const data = [
    {
      name: "Transação 1",
      value: 200.99,
    },
    {
      key: 2,
      name: "Transação 2",
      value: 300.00,
    },
    {
      key: 3,
      name: "Transação 3",
      value: 400.00,
    },
  ]
  return (
    <div>
      <Header />
      <ContainerActions />
      <Container>
        <TableStyled columns={columns} dataSource={data} bordered />
      </Container>
    </div>
  );
}

export default App;
