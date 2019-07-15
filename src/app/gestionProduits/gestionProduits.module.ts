import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {AjoutProduitComponent} from './ajout-produit/ajout-produit.component';
import {ListProduitsComponent} from './list-produits/list-produits.component';
import {GestionProduitsRouting} from "./gestionProduits.routing";
import {HttpModule} from '@angular/http';
import {FormsModule}from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
@NgModule({
    imports: [
        GestionProduitsRouting,
        SharedModule,
        FormsModule,
        HttpModule
    ],
    declarations: [AjoutProduitComponent, ListProduitsComponent,EditProduitComponent]
  })
  export class GestionProduitsModule {
  }