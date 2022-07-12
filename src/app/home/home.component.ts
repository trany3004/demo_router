import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // items!: MenuItem[];
  constructor() { }

  ngOnInit() : void {
    // this.items = [
    //     {
    //         label:'Home',
    //         icon:'pi pi-fw pi-file',
          
    //     },
    //     {
    //         label:'Blog',
    //         icon:'pi pi-fw pi-pencil',
           
    //     },
    //     {
    //         label:'Product',
    //         icon:'pi pi-fw pi-user',
    //         items:[
    //             {
    //                 label:'Cây phong thuỷ',
    //                 icon:'pi pi-fw pi-user-plus',

    //             },
    //             {
    //                 label:'Cây để bàn',
    //                 icon:'pi pi-fw pi-user-minus',

    //             },
    //             {
    //               label:'Cây cảnh sen đá',
    //               icon:'pi pi-fw pi-user-minus',

    //           }
               
    //         ]
    //     },
    //     {
    //         label:'Cart',
    //         icon:'pi pi-fw pi-calendar',
           
    //     }
       
    // ];
}    

}
