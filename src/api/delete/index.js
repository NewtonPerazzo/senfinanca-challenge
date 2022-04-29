import openNotification from "../../utils/openNotification";

const deleteTransaction = (id, data, setData, transaction) => {
    const requestOptions = {
        method: 'DELETE',
    };
    fetch(`https://senfinanca-challenge-api.herokuapp.com/api/transactions/${id}/`, requestOptions)
    .then(response => {
        response.json();
    })
    .then(result => {
        const newData = data?.filter(element => element.id !== transaction?.id);
        setData(newData)
        openNotification("success", "Tudo certo!", "A transação foi excluída com sucesso.")
    })
    .catch(error => {
        openNotification("error", "Ops!", "Não foi possível excluir a transação.")
    });
}

export default deleteTransaction;