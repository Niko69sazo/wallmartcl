import { Component, OnInit } from '@angular/core';
import { VentasService, Venta } from '../../services/ventas.service';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent  implements OnInit {

  venta:Venta = {producto:"",sucursal:"",fecha: new Date(),cantidad:0}
  constructor(private ventaService:VentasService) { }

  ngOnInit() {}

  addVenta(){
    this.ventaService.addVenta(this.venta).then(()=>{
      alert("Se ha Guardado")
      this.venta = {producto:"",sucursal:"",fecha:new Date(),cantidad:0}
    }).catch(error=>{alert("Error al guardar "+error)})
  }

}
