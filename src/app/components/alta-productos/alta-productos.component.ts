import { Component, EventEmitter, Output, Input, ElementRef, ViewChild } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import ListaProductosComponent from '../lista-productos/lista-productos.component';
import Swal from 'sweetalert2';

interface Country {
  name: { common: string };
  flags: { png: string };
}

@Component({
  selector: 'app-alta-productos',
  standalone: true,
  imports: [ListaProductosComponent],
  templateUrl: './alta-productos.component.html',
  styleUrl: './alta-productos.component.css'
})
export default class AltaProductosComponent {
  @Output() productoAgregado = new EventEmitter<void>();
  @Input() selectedCountry: Country | null = null;
  
  //elememtos de los inputs
  @ViewChild('nombreProducto',{static:false}) nombreProductoInput!: ElementRef;
  @ViewChild('descripcionProducto',{static:false}) descripcionProductoInput!: ElementRef;
  @ViewChild('precioProducto',{static:false}) precioProductoInput!: ElementRef;
  @ViewChild('stockProducto',{static:false}) stockProductoInput!: ElementRef;
  @ViewChild('comestible',{static:false}) comestibleInput!: ElementRef;

  constructor(private productosService : ProductosService) {}

  agregarProducto(nombre: string, descripcion: string, precio: string, stock: string, comestible: boolean){
    const precioParseado = Number(precio);
    const stockParseado = Number(stock);
    let nombrePais = this.selectedCountry?.name.common;
    let urlBandera = this.selectedCountry?.flags.png;

    //valido tipo de datos de todos los input
    if(!isNaN(precioParseado) && !isNaN(stockParseado) && typeof comestible == "boolean" && typeof nombre == "string" && typeof descripcion == "string" && nombrePais != null && urlBandera != null) 
    { 
      this.productosService.addProduct(nombre,descripcion, precioParseado,stockParseado,comestible, nombrePais,urlBandera);
      this.refrescarInputs();
      this.productoAgregado.emit();
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
    this.nombreProductoInput.nativeElement.value = null;
    this.descripcionProductoInput.nativeElement.value = null;
    this.precioProductoInput.nativeElement.value = null;
    this.stockProductoInput.nativeElement.value = null;
    this.comestibleInput.nativeElement.checked = false;
    this.selectedCountry = null;
  }
}
