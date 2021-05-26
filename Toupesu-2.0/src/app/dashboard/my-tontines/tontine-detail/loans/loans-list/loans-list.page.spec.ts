import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansListPage } from './loans-list.page';

describe('LoansListPage', () => {
  let component: LoansListPage;
  let fixture: ComponentFixture<LoansListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
