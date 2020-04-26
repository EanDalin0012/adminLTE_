import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register9200Component } from './register9200.component';

describe('Register9200Component', () => {
  let component: Register9200Component;
  let fixture: ComponentFixture<Register9200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register9200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register9200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
