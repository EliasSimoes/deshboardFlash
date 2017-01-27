import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessageService } from  './message.service';
import { MessageComponent } from "./message.component";

@NgModule({

    declarations: [
        MessageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MessageService
    ]

})

export class MessageModule {}