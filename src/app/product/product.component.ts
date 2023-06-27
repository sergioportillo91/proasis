import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VentaService } from '../venta/venta.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Venta } from '../venta/venta';
import { Router } from '@angular/router';
import { ClienteService } from '../client/cliente.service';
import { Cliente } from '../client/cliente';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  clientes: Cliente[] = [];

  displayAddEditModal = false;

  displayAddVentaModal = false;

  selectedProduct:any = null;

  selectedClient:Cliente = {
    id:0,
    Tipoidentificacion: '',
    identificacion: '',
    primerNombre: '',
    segundoNombre: '',
    email: '',
    telefono: '',
    direccion: '',
    primerApellido: '',
    segundoApellido:'',

  };

  productoVenta : Product = {
    id:0,
    nombre:'',
    descripcion:'',
    unidad:'',
    precio:0,
    stock:0,
  }

  venta : Venta = {
  id:0,
  fechaHora:'',
  productoId:0,
  clienteId:0,
  nombreCliente:'',
  nombreProducto:'',
  unidad:'',
  cantidad:0,
  valorUnitario:0,
  valorTotal:0

  }

  totalVenta = this.productoVenta.precio * 1;

  constructor(private ruta:Router, private productService:ProductService,private clienteService:ClienteService,private ventaService:VentaService,private confirmationService:ConfirmationService,private messageService:MessageService,private fb: FormBuilder) { }

  ventaForm = this.fb.group({
    cantidad: [1,Validators.required],
    nombreCliente: ["",Validators.required],
  });

  ngOnInit(): void {
    this.getProductList();
    this.getClientesList();
  }

  getProductList(){
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }
    )
  }

  getClientesList(){
    this.clienteService.getAll().subscribe(
      response => {
        this.clientes = response;
        this.clientes = this.clientes.map(e => <Cliente>
          {
            id:e.id,
            identificacion:e.identificacion + ' '+ e.primerNombre + ' '+ e.primerApellido,
          });

      }
    )
  }

  showAddModal(){
    this.displayAddEditModal = true;
    this.selectedProduct = null;
  }

  showAddVentaModal(product:Product){
    this.displayAddVentaModal = true;
    this.productoVenta = product;
  }


  closeModalVenta(){
    this.ventaForm.reset();
    this.displayAddVentaModal = false;
  }


  hideAddModal(isClosed: boolean){
    this.displayAddEditModal = !isClosed;
  }

  navegarVentas(){
    this.ruta.navigate(['/ventas']);
}

  crearVenta(){
    if(this.ventaForm.value.cantidad! > this.productoVenta.stock){
      this.messageService.add({severity:'error', summary: 'Mensaje informativo', detail: 'No tiene stock suficiente para realizar la venta'});
    }else{
      this.venta.productoId     = this.productoVenta.id;
      this.venta.cantidad       = this.ventaForm.value.cantidad!;
      this.venta.valorUnitario  = this.productoVenta.precio;
      this.venta.nombreProducto = this.productoVenta.nombre;
      this.venta.nombreCliente  = this.selectedClient.identificacion!;
      this.venta.clienteId      = this.selectedClient.id!;
      this.venta.unidad         = this.productoVenta.unidad;
      this.venta.valorTotal     = this.productoVenta.precio * this.ventaForm.value.cantidad!;
      this.ventaService.postVenta(this.venta).subscribe(
        response =>{
            this.closeModalVenta();
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Venta realizada con exito!'});
        }
      );

      this.productService.updateStockProduct(this.venta.productoId,this.venta.cantidad).subscribe(
        response =>{
          this.getProductList();
        }
      );

    }

  }

  saveOrUpdateProductList(newData: any){
    if(this.selectedProduct == null){
      this.products.unshift(newData);
    }else{
      if(newData.id === this.selectedProduct.id){
        const productIndex = this.products.findIndex(data => data.id === newData.id);
        this.products[productIndex] = newData;
      }
    }
  }

  showEditModal(product:Product){
    this.displayAddEditModal = true;
    this.selectedProduct = product;
  }

  calculateTotal(): number {
    const cantidad = this.ventaForm.value.cantidad!;
    const precio = this.productoVenta.precio;
    return cantidad * precio;
  }

  deleteProduct(product:Product){
    this.confirmationService.confirm({
      message:`Quiere Eliminar el Producto ${product.nombre}?`,
      accept:()=>{
        this.productService.deleteProduct(product.id).subscribe(
          response => {
             this.products = this.products.filter(data => data.id !== product.id);
             this.messageService.add({severity:'success', summary: 'Success', detail: `Producto ${product.nombre} eliminado`});
          }
      );
      }
    })
  }

}
