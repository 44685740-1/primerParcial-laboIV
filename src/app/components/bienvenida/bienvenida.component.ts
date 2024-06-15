import { Component, OnInit} from '@angular/core';
import { ApigithubahuitzService } from '../../services/apigithubahuitz.service';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export default class BienvenidaComponent implements OnInit {
  perfil : any;
  constructor(private ApigithubahuitzService : ApigithubahuitzService) {}

  ngOnInit(): void {
    this.ApigithubahuitzService.getProfileData().subscribe(data => {
      this.perfil = data;
    });
  }

}
