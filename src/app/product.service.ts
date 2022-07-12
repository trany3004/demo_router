import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from './model/product.model';

const products: Product[] = [
  {
    name: 'Sen đá',
    id: '1',
    image: 'https://noithatmienbac.vn/images/image/kienthuc/cay-sen-da-nau.jpg'
  },
  {
    name: 'Sen đá 2',
    id: '2',
    image: 'https://noithatmienbac.vn/images/image/kienthuc/cay-sen-da-nau.jpg'
  },
  {
    name: 'Sen đá 3',
    id: '3',
    image: 'https://noithatmienbac.vn/images/image/kienthuc/cay-sen-da-nau.jpg'
  },
  {
    name: 'Sen đá 4',
    id: '4',
    image: 'https://noithatmienbac.vn/images/image/kienthuc/cay-sen-da-nau.jpg'
  },
  {
    name: 'Sen đá 5',
    id: '5',
    image: 'https://noithatmienbac.vn/images/image/kienthuc/cay-sen-da-nau.jpg'
  },
  {
    name: 'Sen đá 6',
    id: '6',
    image: 'https://noithatmienbac.vn/images/image/kienthuc/cay-sen-da-nau.jpg'
  }
];
@Injectable()
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(products).pipe(delay(500));
  }

  getProductById(id: string): Observable<Product | undefined> {
    let product = products.find(x => x.id === id)
    return of(product).pipe(delay(500));
  }
  getProductsByDiffId(id: string): Observable<Product[]> {
    let product = products.filter(x => x.id !== id)
    return of(product).pipe(delay(500));
  }
}
