import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTontinesPage } from './my-tontines.page';

describe('MyTontinesPage', () => {
  let component: MyTontinesPage;
  let fixture: ComponentFixture<MyTontinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTontinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTontinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
