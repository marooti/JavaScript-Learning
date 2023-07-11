import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfTemplateComponent } from './pdf-template/pdf-template.component';
import { JspdfComponent } from './jspdf/jspdf.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfTemplateComponent,
    JspdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
