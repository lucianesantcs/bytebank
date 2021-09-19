import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransgerenciaComponent {
    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    constructor() {}
    
    
    novaTransferencia() {
        this.aoTransferir.emit({
            valor: this.valor,
            destino: this.destino
        });
        this.limparCampos();
    }

    limparCampos() {
        this.valor = 0;
        this.destino = 0;
    }
}