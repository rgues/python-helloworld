import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilPage } from './user-profil.page';

describe('UserProfilPage', () => {
  let component: UserProfilPage;
  let fixture: ComponentFixture<UserProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
