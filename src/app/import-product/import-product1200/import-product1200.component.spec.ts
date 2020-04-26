import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProduct1200Component } from './import-product1200.component';

describe('ImportProduct1200Component', () => {
  let component: ImportProduct1200Component;
  let fixture: ComponentFixture<ImportProduct1200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportProduct1200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProduct1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
