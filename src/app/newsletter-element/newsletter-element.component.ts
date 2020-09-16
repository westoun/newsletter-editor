import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsletterElement } from '../model';
import { NewsletterElementsService } from '../newsletter-elements.service';

@Component({
  selector: 'app-newsletter-element',
  templateUrl: './newsletter-element.component.html',
  styleUrls: ['./newsletter-element.component.css']
})
export class NewsletterElementComponent implements OnInit {
  @Input() newsletterElement: NewsletterElement;

  constructor(private elementsService: NewsletterElementsService) { }

  ngOnInit() {
  }

  onEdit() {
    if (this.newsletterElement) {
      this.elementsService.editElement(this.newsletterElement);
    }
  }

  onDelete() {
    if (this.newsletterElement) {
      this.elementsService.deleteElement(this.newsletterElement);
    }
  }

  onMoveUp() {
    if (this.newsletterElement) {
      this.elementsService.moveElementUp(this.newsletterElement);
    }
  }

  onMoveDown() {
    if (this.newsletterElement) {
      this.elementsService.moveElementDown(this.newsletterElement);
    }
  }

}
