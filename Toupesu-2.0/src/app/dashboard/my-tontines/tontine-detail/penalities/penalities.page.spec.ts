import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalitiesPage } from './penalities.page';

describe('PenalitiesPage', () => {
  let component: PenalitiesPage;
  let fixture: ComponentFixture<PenalitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
