import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getAnnotationStyle'
})
export class GetAnnotationStylePipe implements PipeTransform {

  transform(type: string, content: string): string {
    if (type && !content) {
      return 'background: white; border: 1px solid lightseagreen;';
    }

    if (type && content) {
      return 'background: yellow; opacity: 0.5; cursor: move;';
    }

    return 'background: lightseagreen';
  }

}
