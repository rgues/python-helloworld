import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTontinePage } from './join-tontine.page';

describe('JoinTontinePage', () => {
  let component: JoinTontinePage;
  let fixture: ComponentFixture<JoinTontinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTontinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTontinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
