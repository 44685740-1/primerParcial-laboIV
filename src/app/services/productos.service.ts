import { Injectable } from '@angular/core';
import { Firestore, Timestamp } from '@angular/fire/firestore';
import { addDoc, collection,getDoc, getDocs, updateDoc, doc, where, query} from '@angular/fire/firestore';
import { Producto } from '../models/producto';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private selectedProductSource = new BehaviorSubject<Producto | null>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

  constructor(private firestore: Firestore) { }

  selectProduct(product: Producto) {
    console.log("Product selected Service: ", product); // Debugging log
    this.selectedProductSource.next(product);
  }
  
  async addProduct(nombre: string, descripcion: string, precio: number, stock: number, comestible: boolean, pais: string, urlBandera : string) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'productos'), {
        nombre,
        descripcion,
        precio,
        stock,
        comestible,
        pais,
        urlBandera
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrio un Error intentando Agregar el Producto',
      });
    }
  }

  async getProducts(): Promise<Producto[]> {
    try {
      const querySnapshot = await getDocs(collection(this.firestore, 'productos'));
      const products: Producto[] = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data() } as Producto);
      });
      return products;
    } catch (error) {
      console.error("Error getting products: ", error);
      return [];
    }
  }

  async getProductsWithStock(): Promise<Producto[]> {
    try {
      const q = query(collection(this.firestore, 'productos'), where('stock', '>', 0));
      const querySnapshot = await getDocs(q);
      const products: Producto[] = [];
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data() } as Producto);
      });
      return products;
    } catch (error) {
      console.error("Error getting products with stock: ", error);
      return [];
    }
  }
  

}
