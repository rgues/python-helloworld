import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansMyPage } from './loans-my.page';

describe('LoansMyPage', () => {
  let component: LoansMyPage;
  let fixture: ComponentFixture<LoansMyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansMyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansMyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
