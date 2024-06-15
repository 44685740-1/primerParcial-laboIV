import { Injectable } from '@angular/core';
import { Firestore, Timestamp } from '@angular/fire/firestore';
import { addDoc, collection,getDoc, getDocs, updateDoc, doc, QueryDocumentSnapshot, deleteDoc} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Contendor } from '../models/contendor';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ContenedorService {
  private selectedContainerSource = new BehaviorSubject<Contendor | null>(null);
  selectedContainer$ = this.selectedContainerSource.asObservable();

  constructor(private firestore: Firestore) { }

  selectContenedor(contendor: Contendor) {
    console.log("Contenedor selected Service: ", contendor); // Debugging log
    this.selectedContainerSource.next(contendor);
  }
  
  async addContenedor(empresa: string, color: string, capacidad: number) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'contenedores'), {
        empresa,
        color,
        capacidad
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


  async getContenedores(): Promise<Contendor[]> {
    try {
      const querySnapshot = await getDocs(collection(this.firestore, 'contenedores'));
      const contenedores: Contendor[] = [];
      querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
        const contenedorData = doc.data() as Contendor;
        const contenedor: Contendor = {
          id: doc.id, // Assigning Firestore document ID to the id property
          empresa: contenedorData.empresa,
          color: contenedorData.color,
          capacidad: contenedorData.capacidad
        };
        contenedores.push(contenedor);
      });
      return contenedores;
    } catch (error) {
      console.error("Error getting containers: ", error);
      return [];
    }
  }

  async updateContenedor(contenedor: Contendor): Promise<void> {
    if (!contenedor.id) {
      throw new Error('Container ID is required for update.');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrio un Error intentando Modificar el Producto',
      });
    }

    const contenedorRef = doc(this.firestore, 'contenedores', contenedor.id);
    try {
      await updateDoc(contenedorRef, {
        empresa: contenedor.empresa,
        color: contenedor.color,
        capacidad: contenedor.capacidad
      });
    } catch (error) {
      console.error("Error updating container: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrio un Error intentando Modificar el Producto',
      });
      throw error;
    }
  }

  async deleteContenedor(contenedorId: string): Promise<void> {
    const contenedorRef = doc(this.firestore, 'contenedores', contenedorId);
    try {
      await deleteDoc(contenedorRef);
      console.log("Container deleted successfully.");
    } catch (error) {
      console.error("Error deleting container: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrio un Error intentando Eliminar el Producto',
      });
      throw error;
    }
  }
}
