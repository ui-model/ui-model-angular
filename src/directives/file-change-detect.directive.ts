import {Directive, HostListener, ChangeDetectorRef} from '@angular/core';

@Directive({
  selector: 'input[type=file]'
})
export class FileChangeDetectDirective {

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  @HostListener('change')
  private onChange(): void {
    this.changeDetector.markForCheck();
  }
}
