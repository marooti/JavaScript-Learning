import { style } from '@angular/animations';
import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-pdf-template',
  templateUrl: './pdf-template.component.html',
  styleUrls: ['./pdf-template.component.scss']
})
export class PdfTemplateComponent {
  constructor() {
    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
  }

  openPDF() {
    type Alignment = 'left' | 'center' | 'right';
    const docDefinition = {
      content: [
        {
          columns: [
            {
              width: '100%',
              stack: [
                { text: 'HSS Security', style: 'header' },
                { text: 'Report', style: 'sectionHeader' },
                {
                  columns: [
                    {
                      text: 'Site Details',
                      style: 'subHeader'
                    },
                    {
                      text: 'Shift Details',
                      style: 'subHeader',
                      alignment: 'right' as Alignment
                    }
                  ]
                },
                {
                  columns: [
                    {
                      stack: [
                        { text: 'Code .....', style: 'code' },
                        { text: 'WAPDA Town Lahore, Pakistan', style: 'address' },
                        { text: 'Assigned Managers', style: 'subHeader' },
                        { text: 'Furqan Khan', style: 'subText' },
                        { text: 'Assigned Staff', style: 'subHeader' },
                        { text: 'Sajid Khan', style: 'subText' }
                      ]
                    },
                    {
                      stack: [
                        { text: 'Date:', style: 'subText' },
                        { text: '04 Jul 2023', style: 'subText' },
                        { text: 'Time:', style: 'subText' },
                        { text: '15:00 - 19:00', style: 'subText' }
                      ],
                      alignment: 'right' as Alignment
                    }
                  ],
                },
                { text: 'Table Example', style: 'sectionHeader'},
                {
                  table: {
                    headerRows: 1,
                    widths: ['auto', 'auto', '*'],
                    body: [
                      [{ text: 'Time', style: 'tableHeader' }, { text: 'Type', style: 'tableHeader' }, { text: 'Description', style: 'tableHeader' }],
                      ['Data 1', 'Data 2', 'Data 3'],
                      // Add more table rows as needed
                    ]
                  }
                }
              ]
            },
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          // margin: [0, 0, 0, 10]
        },
        sectionHeader: {
          fontSize: 18,
          bold: true,
          // margin: [0, 10, 0, 5]
        },
        subHeader: {
          fontSize: 14,
          bold: true,
          // margin: [0, 5, 0, 2]
        },
        subText: {
          fontSize: 12,
          // margin: [0, 2, 0, 2]
        },
        code: {
          fontSize: 12,
          bold: true,
          // margin: [0, 5, 0, 2]
        },
        address: {
          fontSize: 12,
          // margin: [0, 2, 0, 2]
        },
        tableHeader: {
          fontSize: 14,
          bold: true,
          fillColor: '#000',
          color: '#fff',
          // margin: [0, 2, 0, 2]
        },
        downloadButton: {
          fontSize: 14,
          bold: true,
          fillColor: '#4caf50',
          color: '#fff',
          padding: [10, 8],
          cursor: 'pointer'
        }
      },
      // pageMargins: [40, 40, 40, 40]
    };

    pdfMake.createPdf(docDefinition).open();
  }

}
