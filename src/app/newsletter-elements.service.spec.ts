import { TestBed, inject } from '@angular/core/testing';

import { NewsletterElementsService } from './newsletter-elements.service';

describe('NewsletterElementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterElementsService]
    });
  });

  it('should be created', inject([NewsletterElementsService], (service: NewsletterElementsService) => {
    expect(service).toBeTruthy();
  }));
});
