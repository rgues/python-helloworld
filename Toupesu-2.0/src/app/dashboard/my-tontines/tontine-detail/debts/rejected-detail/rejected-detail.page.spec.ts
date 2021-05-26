import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedDetailPage } from './rejected-detail.page';

describe('RejectedDetailPage', () => {
  let component: RejectedDetailPage;
  let fixture: ComponentFixture<RejectedDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
