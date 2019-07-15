import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListUtilisateursComponent } from "./list-utilisateurs/list-utilisateurs.component";

export const routes: Routes = [

    {
      path: 'list',
      component: ListUtilisateursComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GestionUtilisateursRouting {
  }