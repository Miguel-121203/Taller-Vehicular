import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllInventarioPage } from './all-inventario.page';

describe('AllInventarioPage', () => {
  let component: AllInventarioPage;
  let fixture: ComponentFixture<AllInventarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
