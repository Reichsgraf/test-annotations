import {Routes} from "@angular/router";
import {DocumentComponent} from "./document/document.component";

export const routes: Routes = [
  { path: ':id', component: DocumentComponent },
  { path: '**', redirectTo: '1'}
];
