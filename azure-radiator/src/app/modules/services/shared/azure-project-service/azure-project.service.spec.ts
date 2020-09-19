import { TestBed } from '@angular/core/testing';

import { AzureProjectService } from './azure-project.service';

describe('AzureProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AzureProjectService = TestBed.get(AzureProjectService);
    expect(service).toBeTruthy();
  });
});
