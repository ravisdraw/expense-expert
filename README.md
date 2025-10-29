Expense Expert

A smart and responsive personal finance management web app built using Angular, designed to help users track expenses, manage investments, and plan monthly budgets efficiently.

Features

Dashboard

1.Displays key financial insights:
2.Monthly Expenses
3.Total Savings
4.Total Investments
5.Emergency Fund Balance
6.Total EMI Due
7.Insurance Premiums

Data visualized using donut charts for EMI and insurance breakdowns.

Real-time data updates via BehaviorSubject.

Monthly Planner

Plan and track monthly expenses by category, amount, and notes.
CRUD operations (Add / Delete) with form validation.
Month-based filtering using Angular pipes and reactive forms.


Responsive Design

Fully mobile-responsive layout built using Flexbox and CSS Grid.
Adaptive sidebar navigation and optimized layout for small screens.

Technical Highlights

Framework: Angular 17
Routing: Lazy-loaded feature modules (DashboardModule, PlannerModule, etc.)
State Management: BehaviorSubject-based service store
Forms: Reactive Forms with validation and error handling
Pipes: Custom currency pipe for Indian Rupee (₹)
Storage: LocalStorage for persistence
Reusable Components: Cards, charts, form inputs
TypeScript Interfaces: Strongly typed models for maintainability
Chart Integration: Donut charts for data visualization