import { Component, Output, EventEmitter } from '@angular/core';
import { Contendor } from '../../models/contendor';
import { ContenedorService } from '../../services/contenedor.service';
@Component({
  selector: 'app-lista-contenedores',
  standalone: true,
  imports: [],
  templateUrl: './lista-contenedores.component.html',
  styleUrl: './lista-contenedores.component.css'
})
export default class ListaContenedoresComponent {
  contenedores: Contendor[] = [];
  @Output() contenedorSeleccionado: EventEmitter<Contendor> = new EventEmitter<Contendor>();
  
  constructor(private contenedorService: ContenedorService) { }

  async ngOnInit() {  
    this.loadContainers();
  }

  async loadContainers(){
    this.contenedores = await this.contenedorService.getContenedores(); 
  }

  onRowDoubleClick(contendor: Contendor) {
    console.log("Contenedor selected in list component: ", contendor); // Debugging log
    this.contenedorService.selectContenedor(contendor);
    this.contenedorSeleccionado.emit(contendor);
  }
}
