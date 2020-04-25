import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoard2000Component } from './dash-board2000.component';

describe('DashBoard2000Component', () => {
  let component: DashBoard2000Component;
  let fixture: ComponentFixture<DashBoard2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoard2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoard2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
