import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyPlanner } from './monthly-planner';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared/shared-module';



const routes: Routes = [
  { path: '', component: MonthlyPlanner }
];


@NgModule({
  declarations: [
    MonthlyPlanner
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModuleModule
  ],
  
})
export class MonthlyPlannerModule { }
