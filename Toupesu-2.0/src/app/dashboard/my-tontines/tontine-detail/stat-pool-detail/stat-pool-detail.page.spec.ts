import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPoolDetailPage } from './stat-pool-detail.page';

describe('StatPoolDetailPage', () => {
  let component: StatPoolDetailPage;
  let fixture: ComponentFixture<StatPoolDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatPoolDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatPoolDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
