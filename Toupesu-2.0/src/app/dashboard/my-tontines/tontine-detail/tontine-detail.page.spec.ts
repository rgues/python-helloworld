import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineDetailPage } from './tontine-detail.page';

describe('TontineDetailPage', () => {
  let component: TontineDetailPage;
  let fixture: ComponentFixture<TontineDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TontineDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
