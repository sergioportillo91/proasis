import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaComponent } from './venta.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    ConfirmDialogModule,
    TooltipModule
  ]
})
export class VentaModule { }
