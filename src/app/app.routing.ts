import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {LoginComponent} from './login/login.component';
import {ExampleModule} from "./example/example.module";
import {GestionProduitsModule} from "./gestionProduits/gestionProduits.module";
import { GestionUtilisateursModule } from './gestionUtilisateurs/gestionUtilisateurs.module';

export function loadExampleModule() {
  return ExampleModule;
}

export function loadGestionProduitsModule() {
  return GestionProduitsModule;
}

export function LoadGestionUtilisateursModule(){
  return GestionUtilisateursModule;
}
export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'example',
        loadChildren: loadExampleModule
      },
      {
        path: 'gestionProduits',
        loadChildren: loadGestionProduitsModule
      },
      {
        path:'GestionUtilisateurs',
        loadChildren:LoadGestionUtilisateursModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
