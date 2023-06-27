import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClienteService } from './cliente.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Cliente } from './cliente';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientes: Cliente[] = [];

  displayAddEditModal = false;

  selectedCliente:any = null;

  modalType = "Agregar";

  tiposIdentificaciones = ["CC","TI","CE","NIT"];

  clienteForm = this.fb.group({
    tipoIdentificacion: ["",Validators.required],
    identificacion: ["",Validators.required],
    primerNombre: ["",Validators.required],
    segundoNombre: [""],
    email: [""],
    telefono: [""],
    direccion: [""],
    primerApellido: ["",Validators.required],
    segundoApellido:["",Validators.required],
  });

  constructor(private fb: FormBuilder,private serviceCliente:ClienteService,private confirmationService:ConfirmationService,private messageService:MessageService,private ruta:Router) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.serviceCliente.getAll().subscribe(
      response => {
        this.clientes = response;
      }
    )
  }

  navegarProducto(){
      this.ruta.navigate(['/productos']);
  }

  showAddModal(){
    this.clienteForm.reset();
    this.modalType = "Agregar";
    this.displayAddEditModal = true;
    this.selectedCliente = null;
  }

  showEditModal(cliente:Cliente){
    this.modalType = "Editar";
    this.displayAddEditModal = true;
    this.selectedCliente = cliente;
    this.clienteForm.patchValue(this.selectedCliente);
  }


  closeModal(){
    this.clienteForm.reset();
    this.displayAddEditModal = false;
  }

  addEditCliente(){
    this.serviceCliente.addEditClient(this.clienteForm.value,this.selectedCliente).subscribe(
      response => {
        this.closeModal();
        this.getAll();
        const msg = this.modalType === "Agregar" ? "Cliente creado exitosamente!!" : "Cliente Modificado!!";
        this.messageService.add({severity:'success', summary: 'Success', detail: msg});
      },
      error => {
        this.messageService.add({ severity:'error', summary: 'Error', detail: 'Error '});
      }
    );
  }

  delete(cliente:Cliente){
    this.confirmationService.confirm({
      message:`Quiere Eliminar el cliente ${cliente.primerNombre} ${cliente.primerApellido} con la identificacion ${cliente.identificacion}?`,
      accept:()=>{
        this.serviceCliente.delete(cliente.id).subscribe(
          response => {
             this.clientes = this.clientes.filter(data => data.id !== cliente.id);
             this.messageService.add({severity:'success', summary: 'Cliente eliminado', detail: `Cliente ${cliente.primerNombre} ${cliente.primerApellido} eliminado`});
          }
      );
      }
    })
  }


}
