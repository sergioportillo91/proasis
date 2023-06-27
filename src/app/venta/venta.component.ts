import { Component, OnInit } from '@angular/core';
import { VentaService } from './venta.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Venta } from './venta';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  ventas: Venta[] = [];

  displayModal = false;

  constructor(private ventaService:VentaService,private productService:ProductService,private confirmationService:ConfirmationService,private messageService:MessageService,private ruta:Router) { }

  ngOnInit(): void {
    this.getVentasList();
  }

  getVentasList(){
    this.ventaService.getVentas().subscribe(
      response => {

        this.ventas = response;
      }
    )
  }

  navegarProductos(){

      this.ruta.navigate(['/productos']);
  }

  showAddModal(){
    this.displayModal = true;
  }

  hideAddModal(isClosed: boolean){
    this.displayModal = !isClosed;
  }

  saveVenta(newData: any){
    this.ventas.unshift(newData);
  }

}
