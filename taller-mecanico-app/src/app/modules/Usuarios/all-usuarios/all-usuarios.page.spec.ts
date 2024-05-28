import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllUsuariosPage } from './all-usuarios.page';

describe('AllUsuariosPage', () => {
  let component: AllUsuariosPage;
  let fixture: ComponentFixture<AllUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
