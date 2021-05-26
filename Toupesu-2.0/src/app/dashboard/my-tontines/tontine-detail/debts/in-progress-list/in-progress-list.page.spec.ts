import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressListPage } from './in-progress-list.page';

describe('InProgressListPage', () => {
  let component: InProgressListPage;
  let fixture: ComponentFixture<InProgressListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
