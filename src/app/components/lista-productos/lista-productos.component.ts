import { Component, OnInit} from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export default class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private ProductosService: ProductosService) { }

  async ngOnInit() {  
    this.loadProducts();
  }

  async loadProducts(){
    this.productos = await this.ProductosService.getProducts(); 
  }

  onRowDoubleClick(product: Producto) {
    console.log("Product selected in list component: ", product); // Debugging log
    this.ProductosService.selectProduct(product);
  }

}
