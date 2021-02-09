const Modal = {
open(){
    //abrir modal
    //abrir a class active modal
    document
        .querySelector('.modal-overlay')
        .classList.add('active')
},
close (){
    //fechar Modal
    //remover a class active modal
    document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    
    }
}

const transaction = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saidas
    },
    total() {
        //entradas - saidas
    }
}

const DOM = {
    innerHTMLTransaction() {

        const html = `
        gfgdfg
        `

    }
}