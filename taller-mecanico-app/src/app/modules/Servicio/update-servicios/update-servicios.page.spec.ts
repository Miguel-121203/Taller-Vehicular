import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateServiciosPage } from './update-servicios.page';

describe('UpdateServiciosPage', () => {
  let component: UpdateServiciosPage;
  let fixture: ComponentFixture<UpdateServiciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
