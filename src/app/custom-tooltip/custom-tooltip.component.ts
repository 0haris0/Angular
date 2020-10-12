import { Component, ElementRef, Input, OnInit } from '@angular/core';

export interface CustomTooltipBox {
  Time: Date;
  Content: String;
  Link: String;
}

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.css'],
})
export class CustomTooltipComponent implements OnInit {
  Time: Date;
  Content: String;
  Link: String;
  @Input() customTooltipTrigger:string;

  constructor() {}
  ngOnInit(): void {
    var customTooltipContent = document.getElementsByTagName('custom-tooltip');
    for (var i = 0; i < customTooltipContent.length; i++) {
      this.Content = customTooltipContent[i].textContent;
      console.log(customTooltipContent[i].attributes);
    }

  }
}
