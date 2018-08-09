import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskChart';
  chartType: string;
  colorSchema: any;
  color1 = {domain: ['#00ff00', '#ffff00', '	#0040ff', '#00ffff']};
  color2 = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  color3 = {domain: ['#330000', '#990000', '#000000', '	#ff4d4d']};
  onSelect( select: string) {
   return  this.chartType = select;
    console.log(this.chartType);
 }

 selectColor(color: any) {
   if (color === 'color1') {
 return this.colorSchema = this.color1;
   }
   if (color === 'color2') {
  return  this.colorSchema = this.color2;
     }
     if (color === 'color3') {
   return   this.colorSchema = this.color3;
       }
   console.log(this.colorSchema);
 }
}
