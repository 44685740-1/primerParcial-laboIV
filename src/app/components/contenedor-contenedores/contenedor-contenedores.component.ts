import { Component, ViewChild } from '@angular/core';
import ListaContenedoresComponent from '../lista-contenedores/lista-contenedores.component';
import AltaContenedorComponent from '../alta-contenedor/alta-contenedor.component';
import ModificarContenedorComponent from '../modificar-contenedor/modificar-contenedor.component';
import EliminarContenedorComponent from '../eliminar-contenedor/eliminar-contenedor.component';
import { Contendor } from '../../models/contendor';



@Component({
  selector: 'app-contenedor-contenedores',
  standalone: true,
  imports: [ListaContenedoresComponent, AltaContenedorComponent, ModificarContenedorComponent, EliminarContenedorComponent],
  templateUrl: './contenedor-contenedores.component.html',
  styleUrl: './contenedor-contenedores.component.css'
})
export default class ContenedorContenedoresComponent {
  @ViewChild('contenedoresList') contenedoresListComponent!: ListaContenedoresComponent;
  selectedContenedor: Contendor | null = null;
  onContenedorSeleccionado(contenedor: Contendor) {
    this.selectedContenedor = contenedor;
  }

  onContainerAdded() {
    this.contenedoresListComponent.loadContainers();
  }

  onContainerModificado() {
    this.contenedoresListComponent.loadContainers();
  }
  
  onContainerEliminado() {
    this.contenedoresListComponent.loadContainers();
  }
}
