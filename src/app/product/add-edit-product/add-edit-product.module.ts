import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';





@NgModule({
  declarations: [
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    CalendarModule
  ],
  exports:[
    AddEditProductComponent
  ]
})
export class AddEditProductModule { }
