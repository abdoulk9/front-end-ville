import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleUpdatePage } from './ville-update.page';

describe('VilleUpdatePage', () => {
  let component: VilleUpdatePage;
  let fixture: ComponentFixture<VilleUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
