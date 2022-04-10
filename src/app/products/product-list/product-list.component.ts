import { Component,OnInit } from "@angular/core";
import { IProduct } from "../product";
import { ProductService } from "../product.service.";

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    // neat shorthand for private property + constructor parameter
    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
      console.log("Product list component was created");
      this.__products = this.productService.getProducts();
      this.listFilter  = 'Le';
    }

    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      console.log(`listFilter set to ${value}`);
      this.productList = this.filterProductsByName(this._listFilter);
    }

    get productList() {
      return this.__productList;
    }
    set productList(items: IProduct[]) {
      if (items.length > 0)
        this.__productList = items;
    }

    onRatingClicked(starValue: number, productId: number): void {
      let productIndex = 
        this.productService.getProducts().findIndex((p) => p.productId === productId);
        this.productService.getProducts()[productIndex].starRating = starValue;
      this.pageTitle = `Product List: product ${productId} rated as ${starValue}`;
    }

    onToggleImage(): void {
      this.showImage = !this.showImage;
    }

    formatPrice(price: number): string {
      return `$${price.toFixed(2)}`;
    }

    filterProductsByName(value: string): IProduct[] {
      value = value.toLowerCase();
      return this.__products
        .filter(
          (p) => p.productName.toLowerCase().includes(value));
    }

    private _listFilter: string = '';
    private __products: IProduct[] = [];
    __productList: IProduct[] = [];
    pageTitle: string = "Product List";
    imageWidthInEm: number = 3;
    imageMarginInEm: number = 0.2;
    showImage: boolean = false;
}