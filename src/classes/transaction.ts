// classes
import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Transaction implements HasFormatter {

    constructor(
        public type: string, 
        public details: string, 
        public amount: number,
        public name: string
        )
    { };

    format() {
        return `${this.name} ${this.type === 'payment' ? 'is owed' : 'owes'} £${this.amount} for ${this.details}`
    };
};