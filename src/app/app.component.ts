import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferenciaService: TransferenciaService) {}

  transferir($event: any) {
    this.transferenciaService.adicionar($event);
  }
}
