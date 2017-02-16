import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Message } from "../message/message.model";
import { MessageService } from "../message/message.service";


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  messages: Message[] =[];

  mensagemId: string;
  gostei: string;
  userName: string;
  comentario: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {

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
}
