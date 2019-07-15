import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {StorageService} from './shared/services/storage.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from "./shared/shared.module";
import {ExampleModule} from "./example/example.module";
import {AdminService} from "./shared/services/admin.service";
import {GestionProduitsModule} from "./gestionProduits/gestionProduits.module";
import { ProduitService } from './shared/services/produit.service';
import { GestionUtilisateursModule } from './gestionUtilisateurs/gestionUtilisateurs.module';
import { UtilisateurService } from './shared/services/utilisateur.service';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ExampleModule,
    GestionProduitsModule,
    GestionUtilisateursModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    StorageService,
    AdminService,
    ProduitService,
    UtilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
