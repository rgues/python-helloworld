import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPoolsPage } from './stat-pools.page';

describe('StatPoolsPage', () => {
  let component: StatPoolsPage;
  let fixture: ComponentFixture<StatPoolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatPoolsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatPoolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
