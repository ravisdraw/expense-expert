import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  standalone: false,
  templateUrl: './donut-chart.html',
  styleUrl: './donut-chart.css',
})
export class DonutChart implements AfterViewInit  {
 @ViewChild('donutCanvas') private donutCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  @Input() labels:string[] = [];
  @Input() data:number[] = [];

  ngAfterViewInit(): void {
    // register necessary Chart.js components
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    const data = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }
      ]
    };

    const options:any = {
      responsive: true,
      cutout: '60%', 
      plugins: {
        legend: {
          display: true,
          position: 'left'
        },
        tooltip: {
          enabled: true
        }
      }
    };

    this.chart = new Chart(this.donutCanvas.nativeElement, {
      type: 'doughnut',
      data: data,
      options: options
    });
  }
}
