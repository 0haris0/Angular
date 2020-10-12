import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { isNgContent } from '@angular/compiler';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { DemoComponent } from './demo/demo.component';

@Directive({
  selector: '[customTooltipTrigger]'
})
export class CustomTooltipTriggerDirective {
  @Input() customTooltipTrigger;
  private __customTooltipTrigger;
  //@Output() Content: EventEmitter<any> = new EventEmitter();
  //@Output() activeTooltip: EventEmitter<any> = new EventEmitter();
  visible: boolean = false;
  constructor(private el: ElementRef, private customTool: DemoComponent) {
    // console.log('TRIGGER:' ,this.customTooltipTrigger)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.customTooltipTrigger ,'init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
    console.log(this.customTooltipTrigger);
  }

  @HostListener('click', ['$event'])
  onClick(): void {
    //this.Content.emit(this.customTooltipTrigger);
    this.customTool.changeField(this.customTooltipTrigger);
  }
}
