export default function getTransactions(){
    const datas = [
        {
            id: 1,
            name: "Transação 1",
            type: "Saída",
            category: "Pix",
            value: 200.99,
        },
        {
            id: 2,
            name: "Transação 2",
            type: "Entrada",
            category: "Recebimento de salário",
            value: 300.00,
        },
        {
            id: 3,
            name: "Transação 3",
            type: "Saída",
            category: "Pagamento de boleto",
            value: 400.00,
        },
        {
            id: 4,
            name: "Transação 4",
            type: "Entrada/Saída",
            category: "Pix Troco",
            value: 20.00,
        },
    ]

    return datas;
}