import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProductosPageRoutingModule } from './list-productos-routing.module';

import { ListProductosPage } from './list-productos.page';
import { ListarProductoComponent } from '../components/listar-producto/listar-producto.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProductosPageRoutingModule
  ],
  declarations: [ListProductosPage,ListarProductoComponent]
})
export class ListProductosPageModule {}
