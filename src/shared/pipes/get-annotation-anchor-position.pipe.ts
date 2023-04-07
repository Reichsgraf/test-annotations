import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getAnnotationAnchorPosition'
})
export class GetAnnotationAnchorPositionPipe implements PipeTransform {

  transform(coordinates: number, anchorRadius: number): string {
    return `${coordinates - anchorRadius}px`
  }

}
