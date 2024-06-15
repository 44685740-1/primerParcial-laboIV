import { Component, ViewChild } from '@angular/core';
import DetalleProductoComponent from '../detalle-producto/detalle-producto.component';
import ListaProductosComponent from '../lista-productos/lista-productos.component';
import AltaProductosComponent from '../alta-productos/alta-productos.component';
import ListadoPaisesComponent from '../listado-paises/listado-paises.component';
import DetallePaisProductoComponent from '../detalle-pais-producto/detalle-pais-producto.component';

interface Country {
  name: { common: string };
  flags: { png: string };
}

@Component({
  selector: 'app-container-producto',
  standalone: true,
  imports: [DetalleProductoComponent, DetallePaisProductoComponent, ListaProductosComponent, AltaProductosComponent,ListadoPaisesComponent],
  templateUrl: './container-producto.component.html',
  styleUrl: './container-producto.component.css'
})
export default class ContainerProductoComponent {
  @ViewChild('productList') productListComponent!:  ListaProductosComponent;
  selectedCountry: Country | null = null;
  
  onProductAdded() {
    this.productListComponent.loadProducts();
  }

  onCountrySelected(country: Country | null): void {
    this.selectedCountry = country;
  }
}
