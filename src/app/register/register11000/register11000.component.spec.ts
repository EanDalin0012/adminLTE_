import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register11000Component } from './register11000.component';

describe('Register11000Component', () => {
  let component: Register11000Component;
  let fixture: ComponentFixture<Register11000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register11000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register11000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
