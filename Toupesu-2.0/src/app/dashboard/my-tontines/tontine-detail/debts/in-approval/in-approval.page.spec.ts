import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InApprovalPage } from './in-approval.page';

describe('InApprovalPage', () => {
  let component: InApprovalPage;
  let fixture: ComponentFixture<InApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InApprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
