import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-detalle-pais-producto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pais-producto.component.html',
  styleUrl: './detalle-pais-producto.component.css'
})
export default class DetallePaisProductoComponent implements OnInit {
  selectedProduct: Producto | null = null;

  constructor(private ProductosService: ProductosService) {}

  ngOnInit() {
    this.ProductosService.selectedProduct$.subscribe(product => {
      console.log("Product received in detail component: ", product); // Debugging log
      this.selectedProduct = product;
    });
    
  }
}
