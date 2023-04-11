import {Directive, ElementRef, EventEmitter, Input, NgZone, OnInit, Output} from "@angular/core";
import {PageAnnotation} from "../models/page-annotation";

@Directive({
  selector: '[drag-and-drop]',
})
export class DragAndDropDirective implements OnInit {

  @Output() dropOn: EventEmitter<any> = new EventEmitter();
  @Output() dragOver: EventEmitter<any> = new EventEmitter();

  @Input() annotation!: PageAnnotation;

  initialX?: number;
  initialY?: number;
  changedX = 0;
  changedY = 0;

  constructor(private elementRef: ElementRef,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.elementRef.nativeElement.addEventListener(
        'drop', this._onDrop.bind(this)
      );
      this.elementRef.nativeElement.addEventListener(
        'dragend', this._onDragEnd.bind(this)
      );
      this.elementRef.nativeElement.addEventListener(
        'dragover', this._onDragOver.bind(this)
      );
      this.elementRef.nativeElement.addEventListener(
        'dragenter', this._onDragEnter.bind(this)
      );
      this.elementRef.nativeElement.addEventListener(
        'dragleave', this._onDragLeave.bind(this)
      );
    });
  }

  private _onDrop($event: DragEvent) {
    this.changedX += $event.clientX - this.initialX!;
    this.changedY += $event.clientY - this.initialY!;
    this.dropOn.emit({x: this.changedX, y: this.changedY});
    $event.preventDefault();
    return false;
  }

  private _onDragEnd($event: DragEvent) {
    this.initialX = undefined;
    this.initialY = undefined;
    this.changedX = 0;
    this.changedY = 0;
    this.elementRef.nativeElement.classList.remove('free-dragging');
    this.elementRef.nativeElement.style.transform = `translate3d(0px, 0px, 0)`;
    this.dragOver.emit();
    $event.preventDefault();
    return false;
  }

  private _onDragOver($event: DragEvent) {
    this.elementRef.nativeElement.style.transform =
      `translate3d(${$event.clientX - this.initialX!}px, ${$event.clientY - this.initialY!}px, 0)`;
    $event.preventDefault();
    return false;
  }

  private _onDragEnter($event: DragEvent) {
    if (!this.initialX && !this.initialY && this.initialX !== 0 && this.initialY !== 0) {
      this.elementRef.nativeElement.classList.add('free-dragging');
      this.initialX = $event.clientX;
      this.initialY = $event.clientY;
    } else {
      this.changedX += $event.clientX - this.initialX!;
      this.changedY += $event.clientY - this.initialY!;
    }
    this.dragOver.emit(true);
  }

  private _onDragLeave($event: DragEvent) {
    this.dragOver.emit(false);
  }

}

