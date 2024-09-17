import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Agregar3Page } from './agregar3.page';

describe('Agregar3Page', () => {
  let component: Agregar3Page;
  let fixture: ComponentFixture<Agregar3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Agregar3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
