import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export default class DetalleProductoComponent {
  selectedProduct: Producto | null = null;

  constructor(private ProductosService: ProductosService) {}

  ngOnInit() {
    this.ProductosService.selectedProduct$.subscribe(product => {
      console.log("Product received in detail component: ", product); // Debugging log
      this.selectedProduct = product;
    });
  }
}
