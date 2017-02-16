import { EventEmitter, Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import { Message } from './message.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { environment } from "../../environments/environment";

@Injectable()

export class MessageService{

    private messages: Message[] = [];
    private indice:           number;
    private indiceGostei:     number;
    private indiceNGostei:    number;

    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http){}


    //relação das sugestoes
    getIndice(){
        return this.http.get('https://flash-deshboard.herokuapp.com/messages/indice')
        //return this.http.get('http://localhost:3000/messages/indice')
        //return this.http.get(environment.api + environment.messageService + environment.indice)
            .map((response:Response) => {

            const indice = response.json().data;
                console.log(indice);
                return indice;
            })
    }

    getGostei(){
        return this.http.get('https://flash-deshboard.herokuapp.com/messages/indice1')
        //return this.http.get('http://localhost:3000/messages/indice1')
        //return this.http.get(environment.api + environment.messageService + environment.indice1)
            .map((response:Response) => {

                const indiceGostei = response.json().data;
                console.log(indiceGostei);
                return indiceGostei;
            })
    }

    getNGostei(){
        return this.http.get('https://flash-deshboard.herokuapp.com/messages/indice2')
        //return this.http.get('http://localhost:3000/messages/indice2')
        //return this.http.get(environment.api + environment.messageService + environment.indice2)
            .map((response:Response) => {

                const indiceNGostei = response.json().data;
                console.log(indiceNGostei);
                return indiceNGostei;
            })
    }



    //métodos do form principal
    getMessages(){
        return this.http.get('https://flash-deshboard.herokuapp.com/messages')
        //return this.http.get(environment.api + environment.messageService)
            .map((response:Response) => {

                const messages = response.json().data;
                const transformedMessages: Message[] = [];

                for(let message of messages) {
                    transformedMessages.push(new Message(message.gostei, message.userName, message.comentario));
                }

                this.messages = transformedMessages;

                return transformedMessages;
            })
    }

    saveMessage(message: Message): Observable<any> {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('https://flash-deshboard.herokuapp.com/messages', body, {headers: headers});
        //return this.http.post(environment.api + environment.messageService, body, {headers: headers});

    }

    // deleteMessage(message: Message){
    //     this.messages.splice(this.messages.indexOf(message), 1);
    //     console.log(message.mensagemId);
    //     //return this.http.delete('http://localhost:3000/messages/' + message.mensagemId)
    //     return this.http.delete('https://flash-deshboard.herokuapp.com/messages/' + message.mensagemId)
    //         .map((response:Response) => response.json())
    //         .catch((error:Response) => {
    //             return Observable.throw(error.json());
    //         });
    // }
}
