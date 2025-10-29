export interface SideTabs {
    iconPath: string;
    key: string;
    value: string;
    navPath: string;
}

export interface SideBottomTabs {
    iconPath: string;
    key: string;
    value: string;
    navPath: string;
}

export interface DashboardCard {
  title: string;
  amount: number;
  percent: number;
  isPositive: boolean;
  description: string;
  key: string;
  navPath?:string;
  chartLabel?:string[];
  chartData?:number[];
}