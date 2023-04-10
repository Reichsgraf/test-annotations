import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getAnnotationAnchorPosition'
})
export class GetAnnotationAnchorPositionPipe implements PipeTransform {

  transform(coordinates: number, anchorRadius: number, scale?: number): string {
    if (scale) {
      return `${coordinates * (scale / 100) - anchorRadius}px`
    }
    return `${coordinates - anchorRadius}px`

  }

}
