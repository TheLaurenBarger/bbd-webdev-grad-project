import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWarriorComponent } from './edit-warrior.component';

describe('EditWarriorComponent', () => {
  let component: EditWarriorComponent;
  let fixture: ComponentFixture<EditWarriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWarriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWarriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
