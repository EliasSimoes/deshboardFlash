import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { MessageService } from "./message/message.service";
import { Message } from "./message/message.model";
import {error} from "util";
import { FormBuilder, Validators, NgForm, FormGroup, FormControl } from "@angular/forms";
import { ChartsComponent } from './charts/charts.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent implements OnInit{

  @Input() message: Message;
  //variaveis basicas
  messages: Message[] = [];
  mensagemID: string;
  gostei: string;
  userName: string;
  comentario: string;


  indice ;
  indiceGostei ;
  indiceNGostei;

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



  // deleteMessage(){
  //
  //     this.messageService.deleteMessage(this.message)
  //         .subscribe(
  //             result => console.log(result)
  //         );
  // }

}
