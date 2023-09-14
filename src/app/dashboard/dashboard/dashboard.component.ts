import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // public donutColors=[
  //   {
  //     backgroundColor: [
  //       'rgba(110, 114, 20, 1)',
  //       'rgba(118, 183, 172, 1)',
  //       'rgba(0, 148, 97, 1)',
  //       'rgba(129, 78, 40, 1)',
  //       'rgba(129, 199, 111, 1)'
  //   ]
  //   }
  // ];

  
  // public doughnutChartLabels:string[] = ['SDET', 'DA', 'DVLR', 'SALESFROCE'];
  // public demodoughnutChartData:number[] = [350, 450, 100, 45];
  // public doughnutChartType:string = 'doughnut';



  constructor() { }

  ngOnInit(): void {
  }
 
    // // events
    // public chartClicked(e:any):void {
    //   console.log(e);
    // }
   
    // public chartHovered(e:any):void {
    //   console.log(e);
    // }
}
