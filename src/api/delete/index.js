import openNotification from "../../utils/openNotification";

const deleteTransaction = async (id) => {
    const requestOptions = {
        method: 'DELETE',
    };
    await fetch(`https://senfinanca-challenge-api.herokuapp.com/api/transactions/${id}/`, requestOptions)
    .then(response => {
        response.json();
    })
    .then(result => {
        openNotification("success", "Tudo certo!", "A transação foi excluída com sucesso.")
    })
    .catch(error => {
        openNotification("error", "Ops!", "Não foi possível excluir a transação.")
    });
}

export default deleteTransaction;