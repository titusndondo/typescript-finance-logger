import { getAllDocs, postDoc } from './classes/httpClient.js';
import { ListTemplate } from './classes/list-template.js';
import { Transaction } from './classes/transaction.js';
getAllDocs()
    .then((transactions) => {
    let values;
    transactions.forEach((transaction) => {
        values = [transaction.type, transaction.details, transaction.amount, transaction.name];
        let currTransaction;
        currTransaction = new Transaction(...values);
        listTemplate.render(currTransaction, transaction.type, 'end');
    });
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Listtemplate instance
const ul = document.querySelector('.item-list');
const listTemplate = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [type.value, details.value, amount.valueAsNumber, tofrom.value];
    let transaction;
    transaction = new Transaction(...values);
    postDoc(transaction)
        .then((response) => {
        console.log(response);
        listTemplate.render(transaction, type.value, 'end');
    });
});
