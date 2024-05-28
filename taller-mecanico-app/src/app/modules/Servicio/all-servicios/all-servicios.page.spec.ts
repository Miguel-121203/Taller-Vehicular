import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllServiciosPage } from './all-servicios.page';

describe('AllServiciosPage', () => {
  let component: AllServiciosPage;
  let fixture: ComponentFixture<AllServiciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
