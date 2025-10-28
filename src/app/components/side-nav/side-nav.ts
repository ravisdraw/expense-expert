import { Component, OnInit } from '@angular/core';
import { SideTabs,SideBottomTabs } from '../../models/dashboard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav implements OnInit {

  constructor(private router: Router) { };

  currentPath: string = "";

  sideNav: SideTabs[] = [
  { iconPath: "assets/svg/dashboard_icon.svg", key: "dashboard", value: "Dashboard", navPath: "/dashboard" },
  { iconPath: "assets/svg/monthlyPlanner_icon.svg", key: "monthlyPlanner", value: "Monthly Planner", navPath: "/monthly-planner" },
  { iconPath: "assets/svg/investments_icon.svg", key: "investments", value: "Investments", navPath: "/investments" },
  { iconPath: "assets/svg/creditCard_icon.svg", key: "creditCard", value: "Credit Card", navPath: "/creditCard" },
  { iconPath: "assets/svg/emiTracker_icon.svg", key: "emiTracker", value: "EMI Tracker", navPath: "/emiTracker" }
];

  sideNavBottom: SideBottomTabs[] = [
  { iconPath: "assets/svg/settings.svg", key: "settings", value: "Settings", navPath: "/settings" },
  { iconPath: "assets/svg/signOut.svg", key: "signOut", value: "Sign Out", navPath: "" }
  ]

navigate(path: string) {
  this.router.navigate([path]);
  this.currentPath = path;
}

  ngOnInit(): void {
    this.navigate("/dashboard");
  }


}
