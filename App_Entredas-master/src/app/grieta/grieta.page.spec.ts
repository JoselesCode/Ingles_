import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrietaPage } from './grieta.page';

describe('GrietaPage', () => {
  let component: GrietaPage;
  let fixture: ComponentFixture<GrietaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GrietaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
