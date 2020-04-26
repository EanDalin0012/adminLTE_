import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register9100Component } from './register9100.component';

describe('Register9100Component', () => {
  let component: Register9100Component;
  let fixture: ComponentFixture<Register9100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register9100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register9100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
