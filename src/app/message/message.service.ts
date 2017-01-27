import { EventEmitter, Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import { Message } from './message.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {environment} from "../../environments/environment";

@Injectable()

export class MessageService{

    private messages: Message[] = [];

    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http){}

    addMessage(message: Message){

        const body = JSON.stringify(message);
        const headers = new Headers ({'Content-Type': 'application/json'});

        return this.http.post(environment.api + environment.messageService, body, {headers: headers})
            .map((response:Response) => {
                const result = response.json();
                const message = new Message(result.obj.gostei, result.obj.userName, result.obj.comentario);
                this.messages.push(message);

                return message
            })
    }

    getMessages(){
        return this.http.get(environment.api + environment.messageService)
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
        return this.http.post(environment.api + environment.messageService, body, {headers: headers});

    }
}
