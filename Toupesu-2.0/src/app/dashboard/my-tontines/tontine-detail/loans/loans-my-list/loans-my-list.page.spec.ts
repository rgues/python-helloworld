import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansMyListPage } from './loans-my-list.page';

describe('LoansMyListPage', () => {
  let component: LoansMyListPage;
  let fixture: ComponentFixture<LoansMyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansMyListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansMyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
