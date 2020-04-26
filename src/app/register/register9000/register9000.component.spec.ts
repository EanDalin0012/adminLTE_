import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register9000Component } from './register9000.component';

describe('Register9000Component', () => {
  let component: Register9000Component;
  let fixture: ComponentFixture<Register9000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register9000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register9000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
