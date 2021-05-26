import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPayTontinePage } from './auto-pay-tontine.page';

describe('AutoPayTontinePage', () => {
  let component: AutoPayTontinePage;
  let fixture: ComponentFixture<AutoPayTontinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoPayTontinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPayTontinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
