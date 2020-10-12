import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CustomTooltipTriggerDirective } from './custom-tooltip-trigger.directive';
import { DemoComponent } from './demo/demo.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTooltipTriggerDirective,
    DemoComponent,
    CustomTooltipComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatListModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
