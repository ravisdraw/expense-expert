import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SideNav } from './components/side-nav/side-nav';
import { DashboardModule } from './components/dashboard/dashboard-module';
import { BaseChartDirective } from 'ng2-charts';
import { MonthlyPlanner } from './components/monthly-planner/monthly-planner';

@NgModule({
  declarations: [
    App,
    SideNav,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BaseChartDirective
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
