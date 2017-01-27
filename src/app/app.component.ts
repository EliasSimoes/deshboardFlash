import { Component, OnInit} from '@angular/core';
import { MessageService } from "./message/message.service";
import { Message } from "./message/message.model";
import {error} from "util";
import {FormBuilder, Validators, NgForm, FormGroup, FormControl,} from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent implements OnInit{


  messages: Message[] = [];

  gostei: string;
  userName: string;
  comentario: string;

  formG: FormGroup;


  constructor(private messageService: MessageService,
              private _fb: FormBuilder){

      this.formG = this._fb.group({


      });

  }

  ngOnInit(){
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

  onSubmit(form: NgForm){



    if (form.value.inputGostei == "true"){
      this.gostei = "Gostei";
    } else {
      this.gostei = "Não gostei";
    }

    this.userName = form.value.nome;
    this.comentario = form.value.comentario;

        alert(this.gostei + ' ' + this.userName + ' ' + this.comentario);

    form.reset();
  }


}
