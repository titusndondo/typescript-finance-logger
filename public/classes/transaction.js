export class Transaction {
    constructor(type, details, amount, name) {
        this.type = type;
        this.details = details;
        this.amount = amount;
        this.name = name;
    }
    ;
    format() {
        return `${this.name} ${this.type === 'payment' ? 'is owed' : 'owes'} £${this.amount} for ${this.details}`;
    }
    ;
}
;
