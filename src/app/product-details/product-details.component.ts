import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  otherProducts: Product[] = [];
  constructor(private router: ActivatedRoute, private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.getProduct();
  });
  }

  getProduct() {
    const id = this.router.snapshot.params['id'];
    this.productService.getProductById(id).subscribe((rs) => {
      this.product = rs;
    })
    this.productService.getProductsByDiffId(id).subscribe((rs) => {
      this.otherProducts = rs;
    })
    
  }

  navigateToProduct(id: string | undefined) {
    this.route.navigate([`/products/${id}`]); 
  }

}
