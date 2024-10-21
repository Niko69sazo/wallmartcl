import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';
import { AuthService } from '../../services/auth.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {
  producto:Producto = {nombre:"",precio:0,imageUrl:""}
  constructor(
    private productoService:ProductosService,
    private aService:AuthService,
    private router:Router
  
  ) { }

  ngOnInit() {}

  addProducto(){
    this.productoService.addProducto(this.producto).then(()=>{
      alert("Se ha Agregado correctamente el producto")
      this.producto = {nombre:"",precio:0,imageUrl:""}
    }).catch(error=>{alert("Error al agregar el producto \n"+error)})
  }

  logout(){
    this.aService.logout();
      alert("Sesion Cerrada")
      this.router.navigate(["/home"]);

  }
}
