import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleInsertPage } from './ville-insert.page';

describe('VilleInsertPage', () => {
  let component: VilleInsertPage;
  let fixture: ComponentFixture<VilleInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleInsertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
