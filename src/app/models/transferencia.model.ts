export interface Transferencia {
    id?: number | string;
    valor: number;
    destino: number | string;
    data?: Date;
}