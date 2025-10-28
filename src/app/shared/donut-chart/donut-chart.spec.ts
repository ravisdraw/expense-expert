import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChart } from './donut-chart';

describe('DonutChart', () => {
  let component: DonutChart;
  let fixture: ComponentFixture<DonutChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
