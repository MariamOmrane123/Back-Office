import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AjoutProduitComponent} from './ajout-produit/ajout-produit.component';
import {ListProduitsComponent} from './list-produits/list-produits.component';
import { EditProduitComponent } from "./edit-produit/edit-produit.component";

export const routes: Routes = [

    {
      path: 'list',
      component: ListProduitsComponent
    }, {
      path: 'add',
      component: AjoutProduitComponent
    },
    {
      path:'edit/:id',
      component:EditProduitComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GestionProduitsRouting {
  }