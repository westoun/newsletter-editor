import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { NewsletterElementsService } from '../newsletter-elements.service';
import { NewsletterElement } from '../model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  newsletterElements: NewsletterElement[] = [];

  constructor(private elementsService: NewsletterElementsService) {

  }

  ngOnInit() {
    this.elementsService.newsletterElements$.subscribe((newsletterElements: NewsletterElement[]) => {
      this.newsletterElements = newsletterElements;
    });
  }

  onEdit(element: NewsletterElement) {
    if (element) {
      this.elementsService.editElement(element);
    }
  }

  onDelete(element: NewsletterElement) {
    if (element) {
      this.elementsService.deleteElement(element);
    }
  }
}
