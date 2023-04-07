import {Component, Input} from '@angular/core';
import {PageAnnotation} from "../../../shared/models/page-annotation";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  annotations: PageAnnotation[] = [];

  @Input()
  get page() { return this._page; }
  set page(value: string) { this._page = `assets/pages/${value}`; }
  private _page = '';

  addAnnotation(event: any) {
    const annotationsLength = this.annotations.length;

    if (annotationsLength > 0 &&
      (!this.annotations[annotationsLength - 1].type || !this.annotations[annotationsLength - 1].content)) {
      this.removeAnnotation(annotationsLength - 1);
    }

    this.annotations.push(<PageAnnotation> {
      x: event.offsetX,
      y: event.offsetY,
      type: '',
      content: ''
    });
  }

  removeAnnotation(index: number) {
    this.annotations.splice(index, 1);
  }

}
