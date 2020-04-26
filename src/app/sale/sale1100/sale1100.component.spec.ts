import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale1100Component } from './sale1100.component';

describe('Sale1100Component', () => {
  let component: Sale1100Component;
  let fixture: ComponentFixture<Sale1100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sale1100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sale1100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
