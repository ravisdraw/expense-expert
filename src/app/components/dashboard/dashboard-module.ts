import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../../shared/shared-module';

const routes: Routes = [
  { path: '', component: Dashboard }
];

@NgModule({
  declarations: [
    Dashboard
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule
]
})
export class DashboardModule { }
