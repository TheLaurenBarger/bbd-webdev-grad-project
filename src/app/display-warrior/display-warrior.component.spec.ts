import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWarriorComponent } from './display-warrior.component';

describe('DisplayWarriorComponent', () => {
  let component: DisplayWarriorComponent;
  let fixture: ComponentFixture<DisplayWarriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWarriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWarriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
