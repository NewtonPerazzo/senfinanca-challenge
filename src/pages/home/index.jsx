import 'antd/dist/antd.css'; 
import { TableMainData } from "../../pageComponents/tableCustom";
import { Container } from "../../containers/app";
import { ContainerActions } from "../../pageComponents/containerFilters";
import { useEffect, useState } from "react";
import MySpaceContainer from "../../pageComponents/mySpaceContainer";
import { Spin } from "antd";

import ModalDeleteTransaction from "../../containers/app/modals/modalDelete";
import ModalEditTransaction from "../../containers/app/modals/modalEdit";
import loadTransactions from "../../api/list";

const Home = () => {
  const [data, setData] = useState([]);
  const [transactionSelected, setTransactionSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  useEffect(() => {
    async function getData(){
      const response = await loadTransactions();
      setData(response)
    }
    getData();
    setLoading(false);
  }, []);

  const handleShowModalDelete = (record) => {
    setTransactionSelected(record);
    setShowModalDelete(!showModalDelete);
  };

  const handleShowModalEdit = (record) => {
      setTransactionSelected(record);
      setShowModalEdit(!showModalEdit);
  };

  const handleRefresh = async () => {
    async function getData(){
      const response = await loadTransactions();
      setData(response)
    }
    getData();
  };

  return (
    <div className="container">
      <Spin spinning={loading}>

        <MySpaceContainer data={data} />
        <ContainerActions data={data} setData={setData} handleRefresh={handleRefresh} />
        <Container>
          <TableMainData 
            data={data}
            handleShowModalDelete={handleShowModalDelete}
            handleShowModalEdit={handleShowModalEdit}
          />

        </Container>
      
      </Spin>

      <ModalDeleteTransaction 
        transaction={transactionSelected} 
        handleShowModal={handleShowModalDelete} 
        showModal={showModalDelete} 
        handleRefresh={handleRefresh} 
      />

      <ModalEditTransaction 
        transaction={transactionSelected} 
        setTransactionSelected={setTransactionSelected}
        handleShowModal={handleShowModalEdit} 
        showModal={showModalEdit}
        handleRefresh={handleRefresh}
      />
    </div>
  );
}

export default Home;
