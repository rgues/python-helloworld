import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesuswapPage } from './pesuswap.page';

describe('PesuswapPage', () => {
  let component: PesuswapPage;
  let fixture: ComponentFixture<PesuswapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesuswapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesuswapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
