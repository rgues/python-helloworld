import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionNoPaidPage } from './session-no-paid.page';

describe('SessionNoPaidPage', () => {
  let component: SessionNoPaidPage;
  let fixture: ComponentFixture<SessionNoPaidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionNoPaidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionNoPaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
