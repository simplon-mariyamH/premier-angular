import { Component } from '@angular/core';


@Component({
        selector: 'mon-app',
        template: `<h1>ERROR 404</h1>
        <p>La page à laquelle vous tentez d'accéder n'existe pas</p>
        <p>
                <a routerLink="/premier">
                Retour à l'index
                </a>
        </p>`
})

export class PageNotFound {


}