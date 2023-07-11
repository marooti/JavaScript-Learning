import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
// import * as pdf from 'html-pdf';
// const path = require('path-browserify');
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  display:boolean = false
  @ViewChild('htmlData') htmlData!: ElementRef;
  @ViewChild('htmlData', { static: false }) el!: ElementRef;
  USERS = [
    {
      time: '18:29',
      type: 'Late Duty',
      duty: 'Started Duty',
      duty_time: '3h 29m late',
      staff: 'Staff',
      staff_name: 'Sajid Khan',
    },
    {
      time: '18:29',
      type: 'Duty Started',
      duty: 'Started Duty',
      duty_time: '3h 29m late',
      staff: 'Staff',
      staff_name: 'Sajid Khan',
      
    },

  ];
  VisitorIn = [
    {
      time: '18:29',
      type: 'Visitor In',
      id:'vistorId',
      vistorId : '+923209896903',
      timeIn: '18:29',
      timeOut: '18:29',
      phoneNumber: '+92 302 6107018',
      vistorStatus: 'IN',
      vistorName: '+92 301 6508018',
      phone: '+92301 3489123'
    },

  ];
  constructor() { }

  openPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    const htmlData = document.getElementById('htmlData');
    if (htmlData) {
      pdf.html(htmlData, {
        callback: (pdf) => {
          pdf.save("demo.pdf");
        }
      });
    }
  }

}