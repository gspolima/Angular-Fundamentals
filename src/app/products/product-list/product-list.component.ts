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
      this._productList = this.productService.getProducts()
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
      return this._productList;
    }
    set productList(items: IProduct[]) {
      if (items.length > 0)
        this._productList = items;
    }

    onRatingClicked(starValue: number, productId: number): void {
      let productIndex = 
        this.productService.getProducts().findIndex((p) => p.productId === productId);
        this.productService.getProducts()[productIndex].starRating = starValue;
      this.pageTitle = `Product List: product ${productId} rated as ${starValue}`;
    }

    onRangeChange() {
      if (this.areValidValues(this.rangeMin, this.rangeMax)) {
        this.isRangeDisabled = false;
        this.rangeValue = this.rangeMin;
      }
      else {
        this.isRangeDisabled = true;
        this.rangeValue = 0;
      }
    }

    areValidValues(min: number, max: number): boolean {
      return max > min ? true : false;
    }

    onToggleImage(): void {
      this.showImage = !this.showImage;
    }

    formatPrice(price: number): string {
      return `$${price.toFixed(2)}`;
    }

    filterProductsByName(value: string): IProduct[] {
      value = value.toLowerCase();
      return this.productService.getProducts()
        .filter(
          (p) => p.productName.toLowerCase().includes(value));
    }

    private _listFilter: string = '';
    private _productList: IProduct[] = [];
    pageTitle: string = "Product List";
    imageWidthInEm: number = 3;
    imageMarginInEm: number = 0.2;
    showImage: boolean = false;
    rangeValue: number = 0;
    rangeMin: number = 0;
    rangeMax: number = 100;
    isRangeDisabled: boolean = false;
}