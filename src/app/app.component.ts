import {
  Component,
  Inject,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ElementRef,
  Renderer2
} from '@angular/core';
import { Button } from '@clr/angular';
import { NewsletterElementsService } from './newsletter-elements.service';
import {
  NewsletterElement,
  TextElement,
  PictureElement,
  TextPictureElement,
  PictureTextElement,
  HorizontalSeperatorElement
} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('previewContainer') previewContainer: ElementRef;
  @ViewChild('copyTarget') codePreview: ElementRef;
  showPreviewModal = false;
  showLeaveModal = false;
  showCodeModal = false;
  htmlCode = '';
  constructor(private newsletterElementsService: NewsletterElementsService) {}

  onAdd(elementName: string): void {
    switch (elementName) {
      case 'TEXT':
        this.newsletterElementsService.addElement(new TextElement());
        break;
      case 'PICTURE':
        this.newsletterElementsService.addElement(new PictureElement());
        break;
      case 'PICTURETEXT':
        this.newsletterElementsService.addElement(new PictureTextElement());
        break;
      case 'TEXTPICTURE':
        this.newsletterElementsService.addElement(new TextPictureElement());
        break;
      case 'HORIZONTALSEPERATOR':
        this.newsletterElementsService.addElement(
          new HorizontalSeperatorElement()
        );
        break;
      default:
        console.log('an error has occured at app.component onAdd()');
    }
  }

  onCreateHtmlClicked() {
    this.htmlCode = this.newsletterElementsService.createHtml();
    this.showCodeModal = true;
  }

  onShowPreviewClicked() {
    this.showPreviewModal = true;
    this.previewContainer.nativeElement.innerHTML = this.htmlCode;
  }
}
