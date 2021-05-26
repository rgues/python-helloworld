import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCautionPage } from './member-caution.page';

describe('MemberCautionPage', () => {
  let component: MemberCautionPage;
  let fixture: ComponentFixture<MemberCautionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCautionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCautionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
