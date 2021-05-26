import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotOrderPage } from './jackpot-order.page';

describe('JackpotOrderPage', () => {
  let component: JackpotOrderPage;
  let fixture: ComponentFixture<JackpotOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JackpotOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
