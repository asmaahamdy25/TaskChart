import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
   declarations: [
      AppComponent,
     ChartsComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      NgxChartsModule,
      BrowserAnimationsModule,
     MatRadioModule,
     MatButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
