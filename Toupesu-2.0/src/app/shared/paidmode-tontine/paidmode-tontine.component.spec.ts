import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidmodeComponent } from './paidmode.component';

describe('PaidmodeComponent', () => {
  let component: PaidmodeComponent;
  let fixture: ComponentFixture<PaidmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidmodeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
