import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllVehiculoPage } from './all-vehiculo.page';

describe('AllVehiculoPage', () => {
  let component: AllVehiculoPage;
  let fixture: ComponentFixture<AllVehiculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
