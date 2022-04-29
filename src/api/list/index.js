const loadTransactions = async (setData) => {
    try {
      const response = await fetch('https://senfinanca-challenge-api.herokuapp.com/api/transactions/');
      const body = await response.json();
      setData(body);
    } catch(error){
      console.log(error);
    }
  }

export default loadTransactions;