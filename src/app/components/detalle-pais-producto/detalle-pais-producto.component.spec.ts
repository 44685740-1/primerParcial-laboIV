import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisProductoComponent } from './detalle-pais-producto.component';

describe('DetallePaisProductoComponent', () => {
  let component: DetallePaisProductoComponent;
  let fixture: ComponentFixture<DetallePaisProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePaisProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallePaisProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
