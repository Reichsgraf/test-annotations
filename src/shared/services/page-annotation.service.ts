import {Injectable} from "@angular/core";
import {PageAnnotation} from "../models/page-annotation";

@Injectable()
export class PageAnnotationService {

  pageAnnotations: PageAnnotation[] = [];

  addAnnotation(event: any, pageIndex: number, scale: number) {
    const annotationsLength = this.pageAnnotations.length;

    if (annotationsLength > 0 &&
      (!this.pageAnnotations[annotationsLength - 1].type || !this.pageAnnotations[annotationsLength - 1].content)) {
      this.removeAnnotation(annotationsLength - 1);
    }

    this.pageAnnotations.push(<PageAnnotation> {
      page: pageIndex,
      x: event.offsetX / (scale / 100),
      y: event.offsetY / (scale / 100),
      type: '',
      content: ''
    });
  }

  removeAnnotation(index: number) {
    this.pageAnnotations.splice(index, 1);
  }

  moveAnnotation(annotation: PageAnnotation, x: number, y: number) {
    annotation.x += x;
    annotation.y += y;
    return annotation;
  }

  saveAnnotations() {
    console.log(this.pageAnnotations.filter((annotation: PageAnnotation) => annotation.type && annotation.content));
  }

}
