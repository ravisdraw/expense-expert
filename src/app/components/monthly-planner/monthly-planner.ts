import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CommonService } from '../../services/common-service';

@Component({
  selector: 'app-monthly-planner',
  standalone: false,
  templateUrl: './monthly-planner.html',
  styleUrl: './monthly-planner.css',
})
export class MonthlyPlanner {
plannerForm!: FormGroup;
  plans: any[] = []; 

  constructor(private fb: FormBuilder, private commonService: CommonService) {}

  ngOnInit(): void {
    this.plannerForm = this.fb.group({
      month: ['', Validators.required],
      category: ['', Validators.required],
      plannedAmount: ['', [Validators.required, Validators.min(0)]],
      note: ['']
    });

    this.commonService.setSelectedMenu("monthlyPlanner");

    this.loadPlans();
  }

  onSubmit() {
    if (this.plannerForm.valid) {
      const newPlan = this.plannerForm.value;
      this.plans.push(newPlan);
      localStorage.setItem('monthlyPlans', JSON.stringify(this.plans));
      this.plannerForm.reset();
    }
  }

  loadPlans() {
    const stored = localStorage.getItem('monthlyPlans');
    if (stored) {
      this.plans = JSON.parse(stored);
    }
  }

  deletePlan(index: number) {
    this.plans.splice(index, 1);
    localStorage.setItem('monthlyPlans', JSON.stringify(this.plans));
  }

  clearAll() {
    localStorage.removeItem('monthlyPlans');
    this.plans = [];
  }

}
