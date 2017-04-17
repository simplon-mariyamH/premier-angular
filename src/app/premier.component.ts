import { Component } from '@angular/core';


@Component ({
    selector: 'premier',
    templateUrl: './premier.component.html'
})
export class PremierComponent {
    premiereVariable: string;
    premierObjet: Object;
    tableau: string[];

    constructor() {
        this.premiereVariable = 'bloup';
        this.premierObjet = {
            attribut1: 'truc',
            attribut2: 'much'
        };
        this.tableau = ['oui', 'non', 'oui', 'non'];
    }

    methodeClick(): void {
        console.log('bloup');
        this.tableau.push(this.premiereVariable);
    }

    deleteClick(index: number): void {
        this.tableau.splice(index, 1);
    }
}