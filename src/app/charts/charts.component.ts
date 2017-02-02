import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MessageService } from "../message/message.service";
import any = jasmine.any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  indice: number ;
  indiceGostei: number;
  indiceNGostei: number;


  constructor(private messageService: MessageService) {

  }

  ngOnInit() {

    this.messageService.getIndice()
        .subscribe(
            data => this.indice = data,
            error => console.log(error)
        )
    this.messageService.getGostei()
        .subscribe(
            data => this.indiceGostei = data,
            error => console.log(error)
        )
    this.messageService.getNGostei()
        .subscribe(
            data => this.indiceNGostei = data,
            error => console.log(error)
        )

  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Não Gostei', 'Gostei', 'Total'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [

    {data: [0], label: 'n gostei'},
    {data: [0], label: 'gostei'},
    {data: [0], label: 'Total'}

  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public getGrafico():void {


    let data = [
      (this.indiceNGostei),
      (this.indiceGostei),
      (this.indice)
    ];

    let clone;
    clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[2].data = data;
      this.barChartData = clone;
      console.log(this.barChartData);
    alert(this.barChartData);

  }
}
