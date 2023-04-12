import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getAnnotationAnchorPosition'
})
export class GetAnnotationAnchorPositionPipe implements PipeTransform {

  transform(coordinates: number, anchorRadius: number, scale: number, clientWidth?: number): string {
    const trueScale = scale / 100;
    if (clientWidth) {
      return `${coordinates * trueScale + clientWidth * (1 - trueScale) / 2 - anchorRadius}px`;
    }
    return `${coordinates * trueScale - anchorRadius}px`;
  }

}
