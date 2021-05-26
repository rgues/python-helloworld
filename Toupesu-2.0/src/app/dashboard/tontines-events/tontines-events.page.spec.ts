import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TontinesEventsPage } from './tontines-events.page';

describe('TontinesEventsPage', () => {
  let component: TontinesEventsPage;
  let fixture: ComponentFixture<TontinesEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TontinesEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TontinesEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
