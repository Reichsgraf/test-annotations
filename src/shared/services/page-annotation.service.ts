import {Injectable} from "@angular/core";
import {PageAnnotation} from "../models/page-annotation";

@Injectable()
export class PageAnnotationService {

  pageAnnotations: PageAnnotation[] = [];

  addAnnotation(event: any, pageIndex: number) {
    const annotationsLength = this.pageAnnotations.length;

    if (annotationsLength > 0 &&
      (!this.pageAnnotations[annotationsLength - 1].type || !this.pageAnnotations[annotationsLength - 1].content)) {
      this.removeAnnotation(annotationsLength - 1);
    }

    this.pageAnnotations.push(<PageAnnotation> {
      page: pageIndex,
      x: event.offsetX,
      y: event.offsetY,
      type: '',
      content: ''
    });
  }

  removeAnnotation(index: number) {
    this.pageAnnotations.splice(index, 1);
  }

  saveAnnotations() {
    console.log(this.pageAnnotations);
  }

}
