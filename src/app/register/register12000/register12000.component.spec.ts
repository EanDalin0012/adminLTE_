import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register12000Component } from './register12000.component';

describe('Register12000Component', () => {
  let component: Register12000Component;
  let fixture: ComponentFixture<Register12000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register12000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register12000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
