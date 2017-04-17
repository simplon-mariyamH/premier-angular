import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { PageNotFound } from './pagenotfound.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        PremierComponent,
        PageNotFound,
        FormulaireComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
