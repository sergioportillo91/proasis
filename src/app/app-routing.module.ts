import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VentaComponent } from './venta/venta.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'ventas',component:VentaComponent},
  {path:'productos',component:ProductComponent},
  {path:'clientes',component:ClientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
