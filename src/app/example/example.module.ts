import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {SharedModule} from "../shared/shared.module";
import {ExampleRouting} from "./example.routing";

@NgModule({
  imports: [
    ExampleRouting,
    SharedModule
  ],
  declarations: [ListComponent, FormulaireComponent]
})
export class ExampleModule {
}
