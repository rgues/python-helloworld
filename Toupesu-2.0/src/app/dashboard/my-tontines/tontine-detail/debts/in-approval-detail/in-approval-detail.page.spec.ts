import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InApprovalDetailPage } from './in-approval-detail.page';

describe('InApprovalDetailPage', () => {
  let component: InApprovalDetailPage;
  let fixture: ComponentFixture<InApprovalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InApprovalDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InApprovalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
