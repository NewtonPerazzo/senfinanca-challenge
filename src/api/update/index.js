import openNotification from "../../utils/openNotification";

const editTransaction = (payload, handleRefresh, setData) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
    fetch(`https://senfinanca-challenge-api.herokuapp.com/api/transactions/${payload.id}/`, requestOptions)
    .then(response => {
        response.json();
    })
    .then(result => {
        handleRefresh(setData);
        openNotification("success", "Tudo certo!", "A transação foi editada com sucesso.")
    })
    .catch(error => {
        openNotification("error", "Ops!", "Não foi possível editar a transação.")
    });
};

export default editTransaction;