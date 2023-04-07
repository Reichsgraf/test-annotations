import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getAnnotationContentPosition'
})
export class GetAnnotationContentPositionPipe implements PipeTransform {

  transform(coordinates: number, anchorRadius: number): string {
    return `${coordinates + anchorRadius}px`
  }

}
