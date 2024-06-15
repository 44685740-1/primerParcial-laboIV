import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProductoComponent } from './container-producto.component';

describe('ContainerProductoComponent', () => {
  let component: ContainerProductoComponent;
  let fixture: ComponentFixture<ContainerProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
