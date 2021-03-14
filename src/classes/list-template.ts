import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement) { };

    render(transaction: HasFormatter, heading: string, pos: 'start' | 'end') {

        console.log(transaction);

        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = transaction.format();
        li.append(p);

        if(pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        };
        
    };
};