import { Component,  AfterViewInit, OnChanges, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import { Contendor } from '../../models/contendor';
import { ContenedorService } from '../../services/contenedor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-contenedor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eliminar-contenedor.component.html',
  styleUrl: './eliminar-contenedor.component.css'
})
export default class EliminarContenedorComponent implements OnChanges {
  @Input() selectedContenedor: Contendor | null = null;
  @Output() contenedorEliminado = new EventEmitter<void>();

  constructor(private contenedorService: ContenedorService){}
  empresa: string = '';
  color: string = '';
  capacidad: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedContenedor'] && this.selectedContenedor) {
      console.log("Selected container in modify component: ", this.selectedContenedor);
      this.cargarInputsContainer();
    }
  }

  async eliminarContenedor() {
    if (this.selectedContenedor && this.selectedContenedor.id) {
      try {
        await this.contenedorService.deleteContenedor(this.selectedContenedor.id);
        console.log('Container deleted successfully.');
        this.contenedorEliminado.emit();
        this.refrescarInputs();
      } catch (error) {
        console.error('Error deleting container:', error);
      }
    }
  }

  
  async modificarContenedor() {
    if (this.selectedContenedor) {
      const updatedContenedor: Contendor = {
        ...this.selectedContenedor,
        empresa: this.empresa,
        color: this.color,
        capacidad: this.capacidad
      };

      try {
        await this.contenedorService.updateContenedor(updatedContenedor);
        console.log('Container updated successfully.');
        this.refrescarInputs();
      } catch (error) {
        console.error('Error updating container:', error);
      }
    }
  }

  
  cargarInputsContainer() {
    if (this.selectedContenedor) {
      this.empresa = this.selectedContenedor.empresa;
      this.color = this.selectedContenedor.color;
      this.capacidad = this.selectedContenedor.capacidad;
    }
  }

  refrescarInputs() {
    this.empresa = '';
    this.color = '';
    this.capacidad = 0;
  }
}
