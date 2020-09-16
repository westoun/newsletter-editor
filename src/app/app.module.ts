import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import {FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ClipboardModule } from 'ngx-clipboard';
import { PreviewComponent } from './preview/preview.component';
import { EditComponent } from './edit/edit.component';
import { NewsletterElementComponent } from './newsletter-element/newsletter-element.component';
import { NewsletterElementsService } from './newsletter-elements.service';

import { NgxDnDModule } from '@swimlane/ngx-dnd';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EditComponent,
    NewsletterElementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    ClipboardModule,
    NgxDnDModule
  ],
  providers: [
    NewsletterElementsService
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
