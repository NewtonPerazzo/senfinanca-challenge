import openNotification from "../../utils/openNotification";


const createTransaction = (payload, handleRefresh, setData) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
      
    fetch("https://senfinanca-challenge-api.herokuapp.com/api/transactions/", requestOptions)
    .then(response => {
        response.json();
    })
    .then(result => {
        handleRefresh(setData);
        openNotification("success", "Tudo certo!", "A transação foi criada com sucesso.")
    })
    .catch(error => {
        openNotification("error", "Ops!", "Não foi possível criar a transação.")
    });
};

export default createTransaction;