import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Producto {
  id?:string;
  nombre:string;
  precio:number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private collectionName="productos";
  constructor(private firestore:AngularFirestore) { }

  addProducto(producto:Producto): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({...producto,id})

  }

  getProducto():Observable<Producto[]>{
    return this.firestore.collection<Producto>(this.collectionName).valueChanges();
  }
}
