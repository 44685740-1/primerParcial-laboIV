import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorContenedoresComponent } from './contenedor-contenedores.component';

describe('ContenedorContenedoresComponent', () => {
  let component: ContenedorContenedoresComponent;
  let fixture: ComponentFixture<ContenedorContenedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorContenedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorContenedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
