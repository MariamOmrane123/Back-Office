import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';
import { GestionUtilisateursRouting } from './gestionUtilisateurs.routing';

@NgModule({
  imports: [
        GestionUtilisateursRouting,
        SharedModule,
        FormsModule,
        HttpModule
  ],
  declarations: [ListUtilisateursComponent]
})
export class GestionUtilisateursModule { }
