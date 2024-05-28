import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVehiculoPage } from './create-vehiculo.page';

describe('CreateVehiculoPage', () => {
  let component: CreateVehiculoPage;
  let fixture: ComponentFixture<CreateVehiculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
