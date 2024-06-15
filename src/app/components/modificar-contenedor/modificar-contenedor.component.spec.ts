import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarContenedorComponent } from './modificar-contenedor.component';

describe('ModificarContenedorComponent', () => {
  let component: ModificarContenedorComponent;
  let fixture: ComponentFixture<ModificarContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarContenedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
