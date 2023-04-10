import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getAnnotationContentPosition'
})
export class GetAnnotationContentPositionPipe implements PipeTransform {

  transform(coordinates: number, anchorRadius: number, scale?: number): string {
    if (scale) {
      return `${coordinates * (scale / 100) + anchorRadius}px`
    }
    return `${coordinates + anchorRadius}px`;
  }

}
