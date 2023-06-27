import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    InputTextModule,
    ConfirmDialogModule,
    TooltipModule,
    DialogModule,
    ReactiveFormsModule,
    InputNumberModule,
    DropdownModule
  ]
})
export class ClientModule { }
