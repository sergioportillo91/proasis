import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductModule } from './product/product.module';
import { VentaModule } from './venta/venta.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    VentaModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
