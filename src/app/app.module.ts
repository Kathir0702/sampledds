import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { DdsModule } from './dds/dds/dds.module';
import {ThumbnailCarouselModule} from 'thumbnail-carousel';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule, FormsModule, DdsModule, ThumbnailCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
