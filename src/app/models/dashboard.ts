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
  amount: string;
  percent: number;
  isPositive: boolean;
  description: string;
  key: string;
}