import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'route';
  menu: MenuItem[] = [];
  constructor() { }

  ngOnInit() : void {
    this.menu = [
        {
            routerLink:"/home",
            label:'Home',
            icon:'pi pi-fw pi-file',
          
        },
        {
            label:'Blog',
            icon:'pi pi-fw pi-pencil',
            routerLink:"/blog",
           
        },
        {
            label:'Product',
            icon:'pi pi-fw pi-user',
            routerLink:"/products",
            items:[
                {
                    label:'Cây phong thuỷ',
                    icon:'pi pi-fw pi-user-plus',

                },
                {
                    label:'Cây để bàn',
                    icon:'pi pi-fw pi-user-minus',

                },
                {
                  label:'Cây cảnh sen đá',
                  icon:'pi pi-fw pi-user-minus',

              }
               
            ]
        },
        {
            label:'Cart',
            icon:'pi pi-fw pi-calendar',
           
        }
       
    ];
}    

}
