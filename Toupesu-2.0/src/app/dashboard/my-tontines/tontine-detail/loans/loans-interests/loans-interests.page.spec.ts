import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansInterestsPage } from './loans-interests.page';

describe('LoansInterestsPage', () => {
  let component: LoansInterestsPage;
  let fixture: ComponentFixture<LoansInterestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansInterestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansInterestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
