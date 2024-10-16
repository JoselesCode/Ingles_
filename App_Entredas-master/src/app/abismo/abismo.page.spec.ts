import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbismoPage } from './abismo.page';

describe('AbismoPage', () => {
  let component: AbismoPage;
  let fixture: ComponentFixture<AbismoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbismoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
