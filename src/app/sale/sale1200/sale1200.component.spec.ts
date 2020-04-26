import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sale1200Component } from './sale1200.component';

describe('Sale1200Component', () => {
  let component: Sale1200Component;
  let fixture: ComponentFixture<Sale1200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sale1200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sale1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
