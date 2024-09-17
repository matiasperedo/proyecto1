import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Agregar2Page } from './agregar2.page';

describe('Agregar2Page', () => {
  let component: Agregar2Page;
  let fixture: ComponentFixture<Agregar2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Agregar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
