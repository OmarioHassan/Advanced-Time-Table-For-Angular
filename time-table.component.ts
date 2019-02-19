import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { trigger, animate, transition, style, query } from '@angular/animations';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
  animations: [
    trigger('popupAnimation', [
      transition(
        //
        ':enter',
        // tslint:disable-next-line:max-line-length
        [style({ transform: 'translateY(-5%) translateX(50%)', opacity: 0 }), animate('150ms', style({ transform: 'translateY(0) translateX(50%)', opacity: 1 }))]
      ),
      transition(
        //
        ':leave',
        // tslint:disable-next-line:max-line-length
        [style({ transform: 'translateY(0) translateX(50%)', opacity: 1 }), animate('150ms', style({ transform: 'translateY(-5%) translateX(50%)', opacity: 0 }))]
      )
    ])
  ]
})
export class AddOrderComponent implements OnInit, AfterViewInit {
  //  ################################### Start Data ###################################
  dayStart = 9;
  dayEnd = 22;
  loopCellWidth;
  @ViewChild('loopContainer') loopContainer: ElementRef;
  hideme = [];
  //  ################################### End Data ###################################

  //  ################################### Start Time Table ###################################
  // Time Table
  minutes = [];
  hours = [];
  technical = [
    {
      name: 'عمر حسن',
      orders: [
        {
          id: 1,
          status: 'started',
          fromH: 9,
          fromM: 0,
          toH: 10,
          toM: 30,
          details: {
            title: 'تم البدء',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 2,
          status: 'finished',
          fromH: 11,
          fromM: 30,
          toH: 12,
          toM: 0,
          details: {
            title: 'تم الإنتهاء',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 3,
          status: 'admin_pending',
          fromH: 13,
          fromM: 20,
          toH: 14,
          toM: 5,
          details: {
            title: 'في إنتظار موافقة الأدمن',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 4,
          status: 'technician_approved',
          fromH: 15,
          fromM: 22,
          toH: 16,
          toM: 5,
          details: {
            title: 'تم الموافقة من الفني',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 5,
          status: 'admin_approved',
          fromH: 17,
          fromM: 30,
          toH: 18,
          toM: 5,
          details: {
            title: 'تم الموافقة من الأدمن',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 6,
          status: 'waiting_admin',
          fromH: 18,
          fromM: 30,
          toH: 19,
          toM: 5,
          details: {
            title: 'في إنتظار موافقة المشرف',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 7,
          status: 'receipt_done',
          fromH: 19,
          fromM: 30,
          toH: 20,
          toM: 5,
          details: {
            title: 'تم إصدار الفاتورة',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        }
      ]
    },
    {
      name: 'رامي زهير',
      orders: [
        {
          id: 8,
          status: 'started',
          fromH: 9,
          fromM: 0,
          toH: 10,
          toM: 30,
          details: {
            title: 'تم البدء',
            clientName: 'رامي زهير',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 9,
          status: 'finished',
          fromH: 11,
          fromM: 30,
          toH: 12,
          toM: 0,
          details: {
            title: 'تم الإنتهاء',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 10,
          status: 'admin_pending',
          fromH: 13,
          fromM: 20,
          toH: 14,
          toM: 5,
          details: {
            title: 'في إنتظار موافقة الأدمن',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 11,
          status: 'technician_approved',
          fromH: 15,
          fromM: 22,
          toH: 16,
          toM: 5,
          details: {
            title: 'تم الموافقة من الفني',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 12,
          status: 'admin_approved',
          fromH: 17,
          fromM: 30,
          toH: 18,
          toM: 5,
          details: {
            title: 'تم الموافقة من الأدمن',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 13,
          status: 'waiting_admin',
          fromH: 18,
          fromM: 30,
          toH: 19,
          toM: 5,
          details: {
            title: 'في إنتظار موافقة المشرف',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        },
        {
          id: 14,
          status: 'receipt_done',
          fromH: 19,
          fromM: 30,
          toH: 20,
          toM: 5,
          details: {
            title: 'تم إصدار الفاتورة',
            clientName: 'عمر حسن',
            clientNumber: '63953',
            clientPhone: '01203792239',
            date: '17/10/2019',
            offer: 'خصم ٢٠ ٪'
          }
        }
      ]
    }
  ];
  // Time Table
  //  ################################### End Time Table ###################################

  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.loopCellWidth = this.loopContainer.nativeElement.offsetWidth;
    this.cdr.detectChanges();
  }
  ngOnInit() {
    //  ################################### Start Time Table Generate Time ###################################
    for (let index = 1; index <= 60; index++) {
      this.minutes.push(index);
    }
    for (let index = this.dayStart; index <= this.dayEnd; index++) {
      this.hours.push(index);
    }
    //  ################################### End Time Table Generate Time ###################################
    //  ################################### Start Loop Cell Width ###################################

    //  ################################### Start Loop Cell Width ###################################
  }
}
