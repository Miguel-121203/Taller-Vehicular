import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateOrdenPage } from './create-orden.page';

describe('CreateOrdenPage', () => {
  let component: CreateOrdenPage;
  let fixture: ComponentFixture<CreateOrdenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
