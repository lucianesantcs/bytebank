import { Component } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransgerenciaComponent {
    valor: number;
    destino: number;

    constructor() {}
    
    
    transferir() {
        console.log('transferencia')
        console.log('valor: ', this.valor, 'destino: ', this.destino)
    }
}