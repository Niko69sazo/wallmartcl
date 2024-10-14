import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {
  producto:Producto = {nombre:"",precio:0,imageUrl:""}
  constructor(private productoService:ProductosService) { }

  ngOnInit() {}

  addProducto(){
    this.productoService.addProducto(this.producto).then(()=>{
      alert("Se ha Agregado correctamente el producto")
      this.producto = {nombre:"",precio:0,imageUrl:""}
    }).catch(error=>{alert("Error al agregar el producto "+error)})
  }

}
