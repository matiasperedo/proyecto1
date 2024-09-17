import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Agregar4Page } from './agregar4.page';

describe('Agregar4Page', () => {
  let component: Agregar4Page;
  let fixture: ComponentFixture<Agregar4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Agregar4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
