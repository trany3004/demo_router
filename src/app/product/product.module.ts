import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductLayoutComponent } from '../product-layout/product-layout.component';
import { ProductService } from '../product.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductLayoutComponent

  ],
  imports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    RouterModule.forChild([
        {
            path: '',
            component: ProductLayoutComponent,
            children: [
                {path: '', component: ProductComponent},
                {
                    path: ':id',
                    component: ProductDetailsComponent
                }
            
            ]
        
        }

    ])
  ],
  providers: [ProductService]
})
export class ProductModule { }
