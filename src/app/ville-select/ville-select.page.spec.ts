import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleSelectPage } from './ville-select.page';

describe('VilleSelectPage', () => {
  let component: VilleSelectPage;
  let fixture: ComponentFixture<VilleSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
