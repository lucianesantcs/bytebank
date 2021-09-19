import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferenciaApp: any = []; // [] corrige erro value undefined

  transferir($event: any) {
    const transferencia = {...$event, data: new Date()}
    this.transferenciaApp.push(transferencia); // envia um array ao invés de obj
  }
}
