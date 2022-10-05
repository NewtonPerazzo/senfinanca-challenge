const loadTransactions = async () => {
    try {
      const response = await fetch('https://senfinanca-challenge-api.herokuapp.com/api/transactions/');
      const body = await response.json();
      return body;
    } catch(error){
      console.log(error);
    }
  }

export default loadTransactions;