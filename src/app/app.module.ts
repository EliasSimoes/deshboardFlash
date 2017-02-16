import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ChartsModule } from "ng2-charts";
import { ChartsComponent } from './charts/charts.component';
import { FormsComponent } from './forms/forms.component';
import { ChartBarEstadoComponent } from './chart-bar-estado/chart-bar-estado.component';
import { ChartMistoComponent } from './chart-misto/chart-misto.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    FormsComponent,
    ChartBarEstadoComponent,
    ChartMistoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
