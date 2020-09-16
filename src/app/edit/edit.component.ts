import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsletterElementsService } from '../newsletter-elements.service';
import { NewsletterElement } from '../model';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  showModal = false;
  editElement: NewsletterElement;

  constructor(private elementsService: NewsletterElementsService) { }

  ngOnInit() {
    this.elementsService.editElement$.subscribe((editElement: NewsletterElement) => {
      this.editElement = editElement;
      this.showModal = true;
    });
    this.showModal = false;
  }

  updateElement() {
    if (this.editElement) {
      this.elementsService.updateElement(_.cloneDeep(this.editElement));
    }
  }

  onContentChanged() {
    // gets called when change event is triggered on modal
    // f.e. when modal is being closed
    this.updateElement();
  }
}
