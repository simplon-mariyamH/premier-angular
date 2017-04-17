import { Routes } from '@angular/router';
import { PremierComponent } from './premier.component';
import { PageNotFound } from './pagenotfound.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormulaireReactiveComponent } from './formulaire/formulaire-reactive.component';



export const routes: Routes = [
    {path: 'premier', component: PremierComponent},
    {path: '', redirectTo: 'premier', pathMatch: 'full'},
    {path: 'formulaire', component: FormulaireComponent},
    {path: 'formulaire-reactive, componenent : FormulaireReactiveComponent'},
    {path: '**', component: PageNotFound}
];