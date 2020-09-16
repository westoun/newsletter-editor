import { Injectable } from '@angular/core';
import { NewsletterElement } from './model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { uuidv4 } from 'uuid/v4';
import * as _ from 'lodash';

@Injectable()
export class NewsletterElementsService {
  editElementSubject = new BehaviorSubject<NewsletterElement>(null);
  editElement$ = this.editElementSubject.asObservable();
  newsletterElementsSubject = new BehaviorSubject<NewsletterElement[]>(null);
  newsletterElements$ = this.newsletterElementsSubject.asObservable();
  elementToBeEdited: NewsletterElement = null;

  newsletterElements: NewsletterElement[] = [];

  constructor() { }

  addElement(element: NewsletterElement): void {
    if (element) {
      this.newsletterElements.push(_.cloneDeep(element));
      this.newsletterElementsSubject.next(_.cloneDeep(this.newsletterElements));
    }
  }

  updateElement(element: NewsletterElement): void {
    if (element) {
      const elements: NewsletterElement[] = [];
      for (const currentElement of this.newsletterElements) {
        if (currentElement.id === element.id) {
          elements.push(_.cloneDeep(element));
        } else {
          elements.push(_.cloneDeep(currentElement));
        }
      }
      this.newsletterElements = elements;
      this.newsletterElementsSubject.next(_.cloneDeep(this.newsletterElements));
    }
  }

  moveElementUp(element: NewsletterElement): void {
    for (let i = 0; i < this.newsletterElements.length; i++) {
      if (this.newsletterElements[i] && this.newsletterElements[i + 1] && this.newsletterElements[i + 1].id === element.id) {
        const temp = this.newsletterElements[i];
        this.newsletterElements[i] = this.newsletterElements[i + 1];
        this.newsletterElements[i + 1] = temp;
        break;
      }
    }
    this.newsletterElementsSubject.next(_.cloneDeep(this.newsletterElements));
  }

  moveElementDown(element: NewsletterElement): void {
    for (let i = 0; i < this.newsletterElements.length; i++) {
      if (this.newsletterElements[i] && this.newsletterElements[i + 1] && this.newsletterElements[i].id === element.id) {
        const temp = this.newsletterElements[i];
        this.newsletterElements[i] = this.newsletterElements[i + 1];
        this.newsletterElements[i + 1] = temp;
        break;
      }
    }
    this.newsletterElementsSubject.next(_.cloneDeep(this.newsletterElements));
  }

  deleteElement(element: NewsletterElement): void {
    if (element) {
      const newsletterElements: NewsletterElement[] = [];
      for (const currentElement of this.newsletterElements) {
        if (currentElement.id === element.id) {
          // do nothing
        } else {
          newsletterElements.push(currentElement);
        }
      }
      this.newsletterElements = newsletterElements;
      this.newsletterElementsSubject.next(_.cloneDeep(this.newsletterElements));
    }
  }

  editElement(element: NewsletterElement): void {
    if (element) {
      this.editElementSubject.next(element);
      // this.editElementSubject.next(_.cloneDeep(element));
    }
  }

  createHtml(): string {
    let htmlCode = `
      <!Doctype html>
      <html>
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div style="width: 100%; table-layout: fixed;">
          <div style="width: 100%; background: rgb(9,39,89);margin: 0 auto;">
            <table style="border-spacing: 0;font-family: sans-serif; color: #727f80;
            width: 100%;max-width: 610px;margin: 0 auto;background-color: #FFF;">`;

    for (const element of this.newsletterElements) {
      htmlCode = htmlCode + element.createHtml();
    }

    htmlCode = htmlCode + `
            </table>
          </div>
        </div>
      </body>
      </html>`;

    return htmlCode;
  }
}
