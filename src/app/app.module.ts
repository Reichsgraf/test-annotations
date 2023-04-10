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
import {ReactiveFormsModule} from "@angular/forms";
import {GetAnnotationStylePipe} from "../shared/pipes/get-annotation-style.pipe";
import {GetPageStylePipe} from "../shared/pipes/get-page-style.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    PageComponent,
    AnnotationComponent,

    GetAnnotationAnchorPositionPipe,
    GetAnnotationContentPositionPipe,

    GetPageStylePipe,
    GetAnnotationStylePipe,
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterModule.forRoot(routes),
        ReactiveFormsModule
    ],
  providers: [
    GetAnnotationAnchorPositionPipe,
    GetAnnotationContentPositionPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
