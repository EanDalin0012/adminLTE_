import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoard1000Component } from './dash-board1000.component';

describe('DashBoard1000Component', () => {
  let component: DashBoard1000Component;
  let fixture: ComponentFixture<DashBoard1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoard1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoard1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
