import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHomePage } from './country-home.page';

describe('CountryHomePage', () => {
  let component: CountryHomePage;
  let fixture: ComponentFixture<CountryHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
