import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEditableControlsComponent } from './ng-editable-controls.component';

describe('NgEditableControlsComponent', () => {
  let component: NgEditableControlsComponent;
  let fixture: ComponentFixture<NgEditableControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEditableControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEditableControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
