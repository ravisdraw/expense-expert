import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RupeeFormatPipe } from '../pipes/rupee-format-pipe';
import { DonutChart } from './donut-chart/donut-chart';


@NgModule({
  declarations: [RupeeFormatPipe, DonutChart],
  imports: [
    CommonModule
  ],
  exports : [RupeeFormatPipe,DonutChart]
})
export class SharedModuleModule { }
