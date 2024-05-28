import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateInventarioPage } from './create-inventario.page';

describe('CreateInventarioPage', () => {
  let component: CreateInventarioPage;
  let fixture: ComponentFixture<CreateInventarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
