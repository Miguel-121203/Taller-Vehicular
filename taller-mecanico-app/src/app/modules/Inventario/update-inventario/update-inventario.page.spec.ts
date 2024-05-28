import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateInventarioPage } from './update-inventario.page';

describe('UpdateInventarioPage', () => {
  let component: UpdateInventarioPage;
  let fixture: ComponentFixture<UpdateInventarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
