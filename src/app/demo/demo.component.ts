import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CustomTooltipTriggerDirective } from '../custom-tooltip-trigger.directive';
import { CustomTooltipComponent } from '../custom-tooltip/custom-tooltip.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor(private el: ElementRef, private customTooltip: CustomTooltipComponent) {}

  ngOnInit(): void {}
  changeField(event): void {
    this.customTooltip.activeTooltip = false;
  }
}
