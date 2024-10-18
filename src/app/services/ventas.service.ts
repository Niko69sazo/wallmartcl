import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Venta {
  id?:string;
  producto:string;
  sucursal:string;
  fecha: Date;
  cantidad:number;
}

@Injectable({
  providedIn: 'root'
})
export class VentasService {
    private collectionName="ventas";
    constructor(private firestore:AngularFirestore) { }
  
    addVenta(venta:Venta): Promise<void> {
      const id = this.firestore.createId();
      return this.firestore.collection(this.collectionName).doc(id).set({...venta,id})
  
    }
  
    getVenta():Observable<Venta[]>{
      return this.firestore.collection<Venta>(this.collectionName).valueChanges();
    }
}
