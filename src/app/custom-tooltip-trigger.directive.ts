import { isNgContent } from '@angular/compiler';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Directive({
  selector: '[customTooltipTrigger]',
})
export class CustomTooltipTriggerDirective {
  @Input() customTooltipTrigger;
  private __customTooltipTrigger;

  constructor(private el: ElementRef) {
    // console.log('TRIGGER:' ,this.customTooltipTrigger)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(Array.of(this.__customTooltipTrigger), 'aa');
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(): void {
    console.log(this.customTooltipTrigger);
  }
}
