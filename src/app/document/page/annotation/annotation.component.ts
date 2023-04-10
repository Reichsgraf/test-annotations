import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {PageAnnotation} from "../../../../shared/models/page-annotation";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent {

  @Input() annotation!: PageAnnotation;
  @Input() scale = 100;

  @Output() remove: EventEmitter<void> = new EventEmitter();

  @ViewChild('content') contentElementRef!: ElementRef;

  annotationAnchorRadius = 9;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      content: ['']
    });
  }

  removeAnnotation() {
    this.remove.emit();
  }

  setAnnotationType(type: 'text' | 'image') {
    this.annotation.type = type;
  }

  setAnnotationContent(event?: any) {
    if (event) {
      if (!event.target.files[0] || event.target.files[0].length == 0) {
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => this.annotation.content = reader.result as unknown as string;

      return;
    }

    return this.annotation.content = this.formGroup.get('content')?.value;
  }

}
