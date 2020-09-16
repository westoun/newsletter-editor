import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterElementComponent } from './newsletter-element.component';

describe('NewsletterElementComponent', () => {
  let component: NewsletterElementComponent;
  let fixture: ComponentFixture<NewsletterElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
