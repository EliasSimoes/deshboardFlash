import { Component, OnInit} from '@angular/core';
import { MessageService } from "./message/message.service";
import { Message } from "./message/message.model";
import {error} from "util";
import { FormBuilder, Validators, NgForm, FormGroup, FormControl } from "@angular/forms";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent implements OnInit{

  //variaveis basicas
  messages: Message[] = [];
  indice: string;
  indiceGostei: string;
  indiceNGostei: string;
  gostei: string;
  userName: string;
  comentario: string;

  //gráfico

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['Deshboard'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any [] =[
      {data: [65], label: 'Gostei'},
      {data: [28], label: 'Não Gostei'}
      ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }





  formG: FormGroup;


  constructor(private messageService: MessageService,
              private _fb: FormBuilder){


  }

  ngOnInit(){
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
    this.messageService.getMessages()
        .subscribe(
            messages => this.messages = messages,
            error => console.error(error)
        )
  }


  addComentario(form: NgForm){

    if (form.value.inputGostei == "true"){
      this.gostei = "Gostei";
    } else {
      this.gostei = "Não gostei";
    }

    this.userName = form.value.nome;
    this.comentario = form.value.comentario;

    const message = new Message(this.gostei, this.userName, this.comentario);
    this.messages.push(message);
    this.messageService.saveMessage(message)
        .subscribe(
            ()=> alert('Obrigado '+ this.userName +', seu comentário foi registrado.'),
            error => console.log(error)
        )
    form.reset();
  }

  onSubmit(form: NgForm) {


  }

  getGrafico():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
