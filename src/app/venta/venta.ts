export interface Venta {
  id:number;
  productoId:number;
  nombreProducto:string;
  clienteId:number;
  nombreCliente:string;
  unidad:string,
  fechaHora:string,
  cantidad:number;
  valorUnitario:number;
  valorTotal:number;
}
