import {Directive, ElementRef, EventEmitter, NgZone, OnInit, Output} from "@angular/core";

@Directive({
  selector: '[drag-and-drop]',
})
export class DragAndDropDirective implements OnInit {

  @Output() dropOn: EventEmitter<any> = new EventEmitter();
  @Output() dragOver: EventEmitter<any> = new EventEmitter();

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
    this.elementRef.nativeElement.classList.remove('free-dragging');
    this.elementRef.nativeElement.style.transform = `none`;
    $event.preventDefault();
    return false;
  }

  private _onDragEnd($event: DragEvent) {
    this.initialX = undefined;
    this.initialY = undefined;
    this.changedX = 0;
    this.changedY = 0;
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
      this.updateInitialCoordinates($event.clientX, $event.clientY);
    }
    this.dragOver.emit(true);
  }

  private _onDragLeave($event: DragEvent) {
    this.updateInitialCoordinates($event.clientX, $event.clientY);
    this.dragOver.emit(false);
  }

  updateInitialCoordinates(x: number, y: number) {
    this.initialX = x;
    this.initialY = y;
  }

}

