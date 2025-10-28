import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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

  ngAfterViewInit(): void {
    // register necessary Chart.js components
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    const data = {
      labels: ['Car', 'Bike', 'TV'],
      datasets: [
        {
          data: [10000, 5000, 2000],
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
