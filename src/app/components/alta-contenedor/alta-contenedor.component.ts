import { Component, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import { ContenedorService } from '../../services/contenedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-contenedor',
  standalone: true,
  imports: [],
  templateUrl: './alta-contenedor.component.html',
  styleUrl: './alta-contenedor.component.css'
})
export default class AltaContenedorComponent {
  @Output() contenedorAgregado = new EventEmitter<void>();

  @ViewChild('empresa',{static:false}) empresaContenedorInput!: ElementRef;
  @ViewChild('color',{static:false}) colorContenedorInput!: ElementRef;
  @ViewChild('capacidad',{static:false}) capacidadContenedorInput!: ElementRef;

  constructor(private contenedorService : ContenedorService) {}

  agregarContenedor(empresa: string, color: string, capacidad: string){
    //valido tipo de datos de todos los input
    const capacidadParseado = Number(capacidad);
    if(!isNaN(capacidadParseado) && typeof empresa == "string" && typeof color == "string" && empresa != null && capacidadParseado != null && empresa.trim() !== "" && capacidadParseado > 0) 
    { 
      this.contenedorService.addContenedor(empresa,color,capacidadParseado);
      this.refrescarInputs();
      this.contenedorAgregado.emit();
    }  else 
    {
      this.refrescarInputs();
      console.error('Tipo de Input invalido');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debe completar todos los Campos',
      });
      return;
    }
  }

  refrescarInputs() {
    this.empresaContenedorInput.nativeElement.value = null;
    this.colorContenedorInput.nativeElement.value = null;
    this.capacidadContenedorInput.nativeElement.value = null;
  }
}
