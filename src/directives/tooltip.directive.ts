import {Directive, Input, HostListener} from '@angular/core';
import {TooltipService} from '../services/tooltip.service';
import {SafeHtml} from '@angular/platform-browser';
import {MeasureDirective} from './measure.directive';

@Directive({
  selector: '[uiTooltip]'
})
export class TooltipDirective {

  @Input('uiTooltip') message: string | SafeHtml;

  @HostListener('mouseenter')
  show(): void {
    this.measure.update();
    const rect = this.measure.boundingRect;
    this.service.show(this.message, rect);
  }

  @HostListener('mouseleave', ['$event'])
  hide(event: MouseEvent): void {
    // for inspector: don't hide when holding ctrl key and alt key
    if (event.altKey && event.ctrlKey) {
      return;
    }
    this.service.hide();
  }

  constructor(private service: TooltipService, private measure: MeasureDirective) {
  }
}
