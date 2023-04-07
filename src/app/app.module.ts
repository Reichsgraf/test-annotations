import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { PageComponent } from './document/page/page.component';
import {routes} from "./app.route";
import { AnnotationComponent } from './document/page/annotation/annotation.component';
import {GetAnnotationAnchorPositionPipe} from "../shared/pipes/get-annotation-anchor-position.pipe";
import {GetAnnotationContentPositionPipe} from "../shared/pipes/get-annotation-content-position.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    PageComponent,
    AnnotationComponent,

    GetAnnotationAnchorPositionPipe,
    GetAnnotationContentPositionPipe,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GetAnnotationAnchorPositionPipe,
    GetAnnotationContentPositionPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
