import {Component, Input} from '@angular/core';
import {PageAnnotation} from "../../../shared/models/page-annotation";
import {PageAnnotationService} from "../../../shared/services/page-annotation.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {

  @Input()
  get page() { return this._page; }
  set page(value: string) { this._page = `assets/pages/${value}`; }
  private _page = '';

  @Input()
  get pageIndex() { return this._pageIndex; }
  set pageIndex(value: number) { this._pageIndex = value; }
  private _pageIndex = 0;

  @Input() annotations: PageAnnotation[] = [];

  constructor(private pageAnnotationService: PageAnnotationService) {
  }

  addAnnotation(event: any) {
    this.pageAnnotationService.addAnnotation(event, this.pageIndex);
  }

  removeAnnotation(index: number) {
    this.pageAnnotationService.removeAnnotation(index);
  }

}
