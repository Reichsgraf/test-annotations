import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getPageStyle'
})
export class GetPageStylePipe implements PipeTransform {

  transform(scale: number) {
    let style = `width: ${scale}%; `;
    if (scale > 100) {
      style += `margin: 0 -${scale - 100}%;`
    }
    return style;
  }

}
