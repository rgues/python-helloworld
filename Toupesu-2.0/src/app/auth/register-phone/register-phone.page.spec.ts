import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPhonePage } from './register-phone.page';

describe('RegisterPhonePage', () => {
  let component: RegisterPhonePage;
  let fixture: ComponentFixture<RegisterPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPhonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
