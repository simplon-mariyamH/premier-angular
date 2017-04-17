import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../shared/utilisateur';
import { PremierService } from '../shared/premier.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
  providers:[PremierService]
})
export class FormulaireComponent implements OnInit {
  nouvelUtilisateur: Utilisateur;
  mdp2: string;

  constructor(private premierService:PremierService) {
    this.nouvelUtilisateur = new Utilisateur;
    this.mdp2 = '';
  }

  ngOnInit() {
    this.premierService.methode();
  }

  inscription(): void {
    console.log(this.nouvelUtilisateur);
    console.log(this.mdp2);
  }

}
