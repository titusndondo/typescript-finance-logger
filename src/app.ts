import { getAllDocs, postDoc } from './classes/httpClient.js';
import { ListTemplate } from './classes/list-template.js';
import { Transaction } from './classes/transaction.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { TransactionType } from './interfaces/transaction.interface.js';


getAllDocs()
    .then((transactions)  => {
    
    let values: [string, string, number, string];

    transactions.forEach((transaction: TransactionType) => {
        
        values = [transaction.type, transaction.details, transaction.amount, transaction.name];
        let currTransaction: HasFormatter;
        currTransaction = new Transaction(...values);
        listTemplate.render(currTransaction, transaction.type, 'end')
    })

})


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// Listtemplate instance
const ul = document.querySelector('.item-list') as HTMLUListElement;
const listTemplate = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number, string];
    values = [type.value, details.value, amount.valueAsNumber, tofrom.value];
    let transaction: HasFormatter;
    transaction = new Transaction(...values);

    postDoc(transaction)
        .then(
            (response: Response) => {
                console.log(response);
                listTemplate.render(transaction, type.value, 'end');
            }
        );

    
    
});