import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransgerenciaComponent {
    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    constructor(private transferenciaService: TransferenciaService) {}
    
    novaTransferencia() {
        const novaTransferencia: Transferencia = {
            valor: this.valor,
            destino: this.destino
        }
        this.transferenciaService.adicionar(novaTransferencia).subscribe((resultado) => {
            console.log(resultado);
            this.limparCampos();
        },
        error => console.log(error));
    }

    limparCampos() {
        this.valor = 0;
        this.destino = 0;
    }
}