import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-bar-estado',
  templateUrl: './chart-bar-estado.component.html',
  styleUrls: ['./chart-bar-estado.component.css']
})
export class ChartBarEstadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [
      54,
      99,
      39,
      41,
      75,
      60,
      57,
      53,
      49,
      50,
      57,
      60,
      66,
      69,
      80,
      82,
      85,
      71,
      70,
      20,
      34,
      22,
      1,
      19,
      98,
      27,
      50
    ], label: 'Flash'},

    {data: [
      4,
      59,
      79,
      61,
      58,
      6,
      23,
      46,
      22,
      53,
      59,
      73,
      69,
      54,
      74,
      82,
      83,
      99,
      13,
      35,
      66,
      73,
      15,
      26,
      49,
      49,
      19
    ], label: 'Terceiros'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100)
      ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


}
