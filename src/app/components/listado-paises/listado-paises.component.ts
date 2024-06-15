import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { FormsModule } from '@angular/forms';

interface Country {
  name: { common: string };
  flags: { png: string, svg: string };
}

@Component({
  selector: 'app-listado-paises',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listado-paises.component.html',
  styleUrl: './listado-paises.component.css'
})
export default class ListadoPaisesComponent implements OnInit {
  countries: Country[] = [];
  selectedCountry: Country | null = null;
  @Output() countrySelected = new EventEmitter<Country | null>();

  constructor(private PaisesService: PaisesService) { }

  ngOnInit(): void {
    this.PaisesService.getCountries().subscribe(
      (data: any[]) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching countries', error);
      }
    );
  }

  selectCountry(country: Country): void {
    this.selectedCountry = country;
    this.countrySelected.emit(this.selectedCountry);
  }
}
