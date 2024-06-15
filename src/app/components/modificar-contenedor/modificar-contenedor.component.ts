import { Component,  AfterViewInit, OnChanges, SimpleChanges, Input,Output,EventEmitter} from '@angular/core';
import { Contendor } from '../../models/contendor';
import { ContenedorService } from '../../services/contenedor.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-contenedor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modificar-contenedor.component.html',
  styleUrl: './modificar-contenedor.component.css'
})
export default class ModificarContenedorComponent implements OnChanges{
  @Input() selectedContenedor: Contendor | null = null;
  @Output() contenedorModificado = new EventEmitter<void>();

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

  async modificarContenedor() {
    if (this.selectedContenedor && this.empresa != null && this.capacidad > 0 && this.empresa.trim() !== "") {
      const updatedContenedor: Contendor = {
        ...this.selectedContenedor,
        empresa: this.empresa,
        color: this.color,
        capacidad: this.capacidad
      };

      try {
        await this.contenedorService.updateContenedor(updatedContenedor);
        console.log('Container updated successfully.');
        this.contenedorModificado.emit();
        this.refrescarInputs();
      } catch (error) {
        console.error('Error updating container:', error);

      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debe completar todos los Campos',
      });
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
