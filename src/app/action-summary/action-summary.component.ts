import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-action-summary',
  templateUrl: './action-summary.component.html',
  styleUrls: ['./action-summary.component.scss']
})
export class ActionSummaryComponent {

 
  public doughnutChartData: ChartData<'doughnut'> = {
    
    datasets: [
      {
        data: [120, 37, 10, 14],
        backgroundColor: ['orange', 'red', 'rgb(39, 188, 47)', 'lightblue'],
      },
    ],
  };

  // Explicitly set the type to 'doughnut'
  public doughnutChartType: 'doughnut' = 'doughnut';

  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
