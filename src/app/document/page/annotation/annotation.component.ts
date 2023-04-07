import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageAnnotation} from "../../../../shared/models/page-annotation";

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent {

  @Input() annotation!: PageAnnotation;

  @Output() remove: EventEmitter<void> = new EventEmitter();

  annotationAnchorRadius = 9;

  removeAnnotation() {
    this.remove.emit();
  }

}
