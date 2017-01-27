import {Component, Input} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";


@Component({

})

export class MessageComponent{
    @Input() message: Message;

    constructor(private messageService:MessageService){}


}
