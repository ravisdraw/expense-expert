import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPlanner } from './monthly-planner';

describe('MonthlyPlanner', () => {
  let component: MonthlyPlanner;
  let fixture: ComponentFixture<MonthlyPlanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyPlanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPlanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
