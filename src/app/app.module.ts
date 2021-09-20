import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransgerenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app.routing.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransgerenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'}, // muda idioma angular para pt
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' } // muda valor da moede para br
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
