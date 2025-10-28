import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard-module').then(m => m.DashboardModule) },
  { path: 'monthly-planner', loadChildren: () => import ('./components/monthly-planner/monthly-planner-module').then(m => m.MonthlyPlannerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
