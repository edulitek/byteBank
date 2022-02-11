export interface Root {
  transferencias: Transferencia[]
}

export interface Transferencia {
  id?: any;
  valor: number ;
  destino: string | number;
  data?: string;
}
