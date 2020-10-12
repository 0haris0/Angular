import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CustomTooltipTriggerDirective } from '../custom-tooltip-trigger.directive';
import { DemoComponent } from '../demo/demo.component';

export interface Tooltip {
  Content: string;
}

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.css'],
})
export class CustomTooltipComponent implements OnInit {
  /*Time: Date;
  Content: String;
  Link: String;*/
  @Input('customTooltipTrigger') customTooltipTrigger;
  //@Input() activeTooltip: boolean;
  activeTooltip = false;
  Content = 'test';
  constructor(private el: ElementRef, private test : CustomTooltipTriggerDirective) {
    console.log(el);
  }
  ngOnInit(): void {
    console.log(this.Content, 'tes', this.test.customTooltipTrigger);
    this.Content = this.customTooltipTrigger;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    debugger
    let test = SimpleChange.call(this.customTooltipTrigger);
    alert(test);
    console.log(this.Content, 'vol1');
    console.log(this.customTooltipTrigger, 'vol1');
  }
}
