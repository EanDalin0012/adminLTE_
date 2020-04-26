import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProduct1000Component } from './import-product1000.component';

describe('ImportProduct1000Component', () => {
  let component: ImportProduct1000Component;
  let fixture: ComponentFixture<ImportProduct1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportProduct1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProduct1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
