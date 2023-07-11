import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-jspdf',
  template: `
    <div class="">
      <div class="row">
        <div class="col-8 p-4" id="htmlData2" *ngIf="showContent">
          <!-- Your other content here -->
        </div>
        <div class="col-md-4 text-right">
          <button *ngIf="!showContent" class="btn btn-success btn-block" (click)="openPDF()">Download PDF</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./jspdf.component.scss']
})
export class JspdfComponent {
  showContent = false; // Set this variable to control the visibility of the other content

  openPDF() {
    const pdf = new jsPDF('p', 'pt', 'a4');
    const htmlData = document.getElementById('htmlData2');
    console.log("csd",htmlData)
    if (htmlData) {
      pdf.html(htmlData, {
        callback: (pdf) => {
          pdf.save('demo.pdf');
        }
      });
    }
  }
}
