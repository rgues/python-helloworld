import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankmodeComponent } from './bankmode.component';

describe('BankmodeComponent', () => {
  let component: BankmodeComponent;
  let fixture: ComponentFixture<BankmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankmodeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
