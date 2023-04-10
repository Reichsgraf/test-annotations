import {Component, OnInit} from '@angular/core';
import {AppDocument} from "../../shared/models/app-document";
import {PageAnnotationService} from "../../shared/services/page-annotation.service";
import {PageAnnotation} from "../../shared/models/page-annotation";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  providers: [PageAnnotationService]
})
export class DocumentComponent implements OnInit {

  document?: AppDocument;
  annotations: PageAnnotation[] = [];

  constructor(private pageAnnotationService: PageAnnotationService) {
  }

  ngOnInit() {
    this.document = { title: 'test doc', pages: ['1.png', '2.png', '3.png', '4.png', '5.png'] };
    this.annotations = this.pageAnnotationService.pageAnnotations;
  }

  save() {
    this.pageAnnotationService.saveAnnotations();
  }

}
