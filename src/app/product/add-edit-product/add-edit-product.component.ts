import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit,OnChanges {

  @Input() displayAddEditModal: boolean = true;
  @Input() selectedProduct: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType = "Agregar";

  productForm = this.fb.group({
    nombre: ["",Validators.required],
    descripcion: ["",Validators.required],
    unidad: ["",Validators.required],
    precio:[0,Validators.required],
    stock:[0,Validators.required],
  });

  constructor(private fb: FormBuilder, private serviceProduct:ProductService,private messageService:MessageService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.selectedProduct){
      this.modalType = "Editar";
      this.productForm.patchValue(this.selectedProduct);
    }else{
      this.productForm.reset();
      this.modalType = "Agregar";
    }
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.productForm.reset();
    this.clickClose.emit(true);
  }

  addEditProduct(){
    this.serviceProduct.addEditProduct(this.productForm.value,this.selectedProduct).subscribe(
      response => {
        this.clickAddEdit.emit(response);
        this.closeModal();
        const msg = this.modalType === "Agregar" ? "Producto" : "Producto Modificado";
        this.messageService.add({severity:'success', summary: 'Success', detail: msg});
      },
      error => {
        this.messageService.add({ severity:'error', summary: 'Error', detail: 'Error '});
      }
    );
  }

}
