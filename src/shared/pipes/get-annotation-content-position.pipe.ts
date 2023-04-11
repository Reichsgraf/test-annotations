import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getAnnotationContentPosition'
})
export class GetAnnotationContentPositionPipe implements PipeTransform {

  transform(coordinates: number, anchorRadius: number, scale: number, clientWidth?: number): string {
    if (clientWidth) {
      return `${coordinates * (scale / 100) + clientWidth * (1 - scale / 100) / 2 + anchorRadius}px`;
    }
    return `${coordinates * (scale / 100) + anchorRadius}px`;
  }

}
