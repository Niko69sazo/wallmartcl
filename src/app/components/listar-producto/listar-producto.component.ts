import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss'],
})
export class ListarProductoComponent  implements OnInit {
  productos:Producto[]=[]
  constructor(private productosService:ProductosService) { }

  ngOnInit() { this.productosService
    this.productosService.getProducto().subscribe(productos =>{
      this.productos= productos;
    })
  }

}
