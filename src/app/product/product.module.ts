import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {HttpClientModule} from '@angular/common/http'
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import {MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    AddEditProductModule,
    TooltipModule,
    InputTextModule,
    InputNumberModule,
    DialogModule,
    DropdownModule
  ],
  exports:[
    ProductComponent,

  ],
  providers:[
    MessageService,
    ConfirmationService
  ]
})
export class ProductModule { }
