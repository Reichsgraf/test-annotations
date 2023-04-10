import {Pipe, PipeTransform} from "@angular/core";
import {PageAnnotation} from "../models/page-annotation";

@Pipe({
  name: 'filterAnnotationsByPage'
})
export class FilterAnnotationsByPagePipe implements PipeTransform {

  transform(annotations: PageAnnotation[], pageIndex: number): PageAnnotation[] {
    console.log(pageIndex, annotations.filter((annotation: PageAnnotation) => annotation.page === pageIndex))
    return annotations.filter((annotation: PageAnnotation) => annotation.page === pageIndex);
  }

}
