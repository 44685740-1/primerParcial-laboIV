import { Component , OnInit} from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listado-publico',
  standalone: true,
  imports: [],
  templateUrl: './listado-publico.component.html',
  styleUrl: './listado-publico.component.css'
})
export default class ListadoPublicoComponent implements OnInit{

  productos: Producto[] = [];

  constructor(private ProductosService: ProductosService) { }

  async ngOnInit() {  
    this.loadProductsWithStock();
  }

  async loadProductsWithStock(){
    this.productos = await this.ProductosService.getProductsWithStock(); 
  }
}
