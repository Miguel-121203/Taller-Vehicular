import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllOrdenPage } from './all-orden.page';

describe('AllOrdenPage', () => {
  let component: AllOrdenPage;
  let fixture: ComponentFixture<AllOrdenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
