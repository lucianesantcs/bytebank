import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;
  //transferencia: any = {}; //corrige erro value undefined 
  //ou usa no html: {{ transferencia?.valor }}

  transferir($event: any) {
    this.transferencia = $event;
  }
}
