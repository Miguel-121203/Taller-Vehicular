import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateOrdenPage } from './update-orden.page';

describe('UpdateOrdenPage', () => {
  let component: UpdateOrdenPage;
  let fixture: ComponentFixture<UpdateOrdenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
