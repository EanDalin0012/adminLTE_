import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProduct1100Component } from './import-product1100.component';

describe('ImportProduct1100Component', () => {
  let component: ImportProduct1100Component;
  let fixture: ComponentFixture<ImportProduct1100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportProduct1100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProduct1100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
