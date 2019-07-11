import { TestBed } from '@angular/core/testing';

import { NgEditableControlsService } from './ng-editable-controls.service';

describe('NgEditableControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgEditableControlsService = TestBed.get(NgEditableControlsService);
    expect(service).toBeTruthy();
  });
});
