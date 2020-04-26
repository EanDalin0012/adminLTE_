import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register10000Component } from './register10000.component';

describe('Register10000Component', () => {
  let component: Register10000Component;
  let fixture: ComponentFixture<Register10000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register10000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register10000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
