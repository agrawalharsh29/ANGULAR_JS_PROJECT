import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userpage3Component } from './userpage3.component';

describe('Userpage3Component', () => {
  let component: Userpage3Component;
  let fixture: ComponentFixture<Userpage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userpage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
