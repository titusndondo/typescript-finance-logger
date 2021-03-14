import { HasFormatter } from "../interfaces/HasFormatter";
import { TransactionType } from "../interfaces/transaction.interface";

const baseURL = 'http://127.0.0.1:5000/'

// make request
export function postDoc(transaction: HasFormatter) {

    return fetch(`${baseURL}add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction)
    }
  )    
};

export function getAllDocs() {
    return fetch(`${baseURL}all`)
      .then(response => response.json());
}