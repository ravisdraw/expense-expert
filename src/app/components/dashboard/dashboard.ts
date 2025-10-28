import { Component } from '@angular/core';
import { DashboardCard } from '../../models/dashboard';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  dashboardData: DashboardCard[] = [
  {
    title: 'Monthly Expenses',
    amount: '₹28,000',
    percent: 5.2,
    isPositive: false,
    description: 'Since last month',
    key: 'monthlyExpense'
  },
  {
    title: 'Total Savings',
    amount: '₹35,000',
    percent: 12.8,
    isPositive: true,
    description: 'Since last month',
    key: 'totalSavings'
  },
  {
    title: 'Total Investments',
    amount: '₹1.6L',
    percent: 2.4,
    isPositive: true,
    description: 'Since last month',
    key: 'totalInvestments'
  },
  {
    title: 'Emergency Fund Balance',
    amount: '₹50,000',
    percent: 0,
    isPositive: true,
    description: '',
    key: 'emergencyFund'
  }
];

dashboardItems:DashboardCard[] = [
 {
    title: 'Total EMI Due',
    amount: '₹21,000',
    percent: 20,
    isPositive: false,
    description: 'of Net Monthly Income',
    key: 'totalEMIDue'
  },
  {
    title: 'Insurance Premiums',
    amount: '₹15,000',
    percent: 0, // optional if you want no arrow
    isPositive: false,
    description: 'Monthly Insurance Spent',
    key: 'insurance'
  },
]



}
