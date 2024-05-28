import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateServiciosPage } from './create-servicios.page';

describe('CreateServiciosPage', () => {
  let component: CreateServiciosPage;
  let fixture: ComponentFixture<CreateServiciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
