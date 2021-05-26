import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaidmodeDebtComponent } from './paidmode-debt.component';

describe('PaidmodeComponent', () => {
  let component: PaidmodeDebtComponent;
  let fixture: ComponentFixture<PaidmodeDebtComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidmodeDebtComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PaidmodeDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
