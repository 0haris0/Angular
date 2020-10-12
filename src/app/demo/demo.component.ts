import { Component, ElementRef, OnInit } from '@angular/core';
import { CustomTooltipComponent } from '../custom-tooltip/custom-tooltip.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private el:ElementRef) {
  }

  ngOnInit(): void {
    console.log(this);
  }

}
