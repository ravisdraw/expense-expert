import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyPlanner } from './monthly-planner';



const routes: Routes = [
  { path: '', component: MonthlyPlanner }
];


@NgModule({
  declarations: [
    MonthlyPlanner
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  
})
export class MonthlyPlannerModule { }
