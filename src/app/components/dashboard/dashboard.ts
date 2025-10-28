import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../../models/dashboard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  constructor(private router: Router) { };

  ngOnInit(): void {
    this.getMonthlyExpense();
  }

  dashboardData: DashboardCard[] = [
    {
      title: 'Monthly Expenses',
      amount: 0,
      percent: 5.2,
      isPositive: false,
      description: 'Since last month',
      key: 'monthlyExpense',
      navPath: '/monthly-planner'
    },
    {
      title: 'Total Savings',
      amount: 35000,
      percent: 12.8,
      isPositive: true,
      description: 'Since last month',
      key: 'totalSavings'
    },
    {
      title: 'Total Investments',
      amount: 160000,
      percent: 2.4,
      isPositive: true,
      description: 'Since last month',
      key: 'totalInvestments'
    },
    {
      title: 'Emergency Fund Balance',
      amount: 50000,
      percent: 0,
      isPositive: true,
      description: '',
      key: 'emergencyFund'
    }
  ];

  dashboardItems: DashboardCard[] = [
    {
      title: 'Total EMI Due',
      amount: 21000,
      percent: 20,
      isPositive: false,
      description: 'of Net Monthly Income',
      key: 'totalEMIDue'
    },
    {
      title: 'Insurance Premiums',
      amount: 15000,
      percent: 0, // optional if you want no arrow
      isPositive: false,
      description: 'Monthly Insurance Spent',
      key: 'insurance'
    },
  ]

  navigate(path?: string) {
    this.router.navigate([path]);
  }


  getMonthlyExpense(): void {
    const monthlyPlans = localStorage.getItem('monthlyPlans');

    if (monthlyPlans) {
      const plans = JSON.parse(monthlyPlans);


      const total = plans.reduce((sum: number, plan: any) => {
        const amount = Number(plan.plannedAmount) || 0;
        return sum + amount;
      }, 0);

      this.dashboardData.forEach((item: DashboardCard) => {
        if (item.key === "monthlyExpense") {
          item.amount = total;
        }
      })
    }

  }


}
