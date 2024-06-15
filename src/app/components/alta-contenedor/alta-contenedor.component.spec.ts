import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaContenedorComponent } from './alta-contenedor.component';

describe('AltaContenedorComponent', () => {
  let component: AltaContenedorComponent;
  let fixture: ComponentFixture<AltaContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaContenedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
