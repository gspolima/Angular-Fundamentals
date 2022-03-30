import { Component,OnInit } from "@angular/core";
import { IProduct } from "../product";

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    /*
    **
    */
    constructor() {
      this._productList = this._products;
    }

    ngOnInit(): void {
      console.log("Product list component was created");
      this.listFilter  = 'rake';
    }

    private _listFilter: string = '';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      console.log(`listFilter set to ${value}`);
      this.productList = this.filterProductsByName(this._listFilter);
    }

    private _productList: IProduct[];
    get productList() {
      return this._productList;
    }
    set productList(items: IProduct[]) {
      this._productList = items;
    }

    private _products: IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2021",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "2021-03-18",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "2021-05-21",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 6,
          "productName": "LED Light Bulb",
          "productCode": "APL-0024",
          "releaseDate": "2021-12-01",
          "description": "Powerful 12W Neutral Color Light",
          "price": 5.1,
          "starRating": 3.9,
          "imageUrl": "assets/images/lightbulb.png"
        },
        {
          "productId": 7,
          "productName": "Saw",
          "productCode": "SNL-0078",
          "releaseDate": "2021-06-30",
          "description": "Rock solid saw",
          "price": 12,
          "starRating": 4.4,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 10,
          "productName": "XBox Controller",
          "productCode": "XMS-0001",
          "releaseDate": "2021-11-15",
          "description": "Comfortable with long-lasting batteries",
          "price": 25.9,
          "starRating": 4.9,
          "imageUrl": "assets/images/xbox-controller.png"
        }
    ];

    onRatingClicked(message: string): void {
      this.pageTitle = `Product List: ${message}`;
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
      return this._products.filter((p) => p.productName.toLowerCase().includes(value));
    }

    pageTitle: string = "Product List";
    imageWidthInEm: number = 3;
    imageMarginInEm: number = 0.2;
    showImage: boolean = false;
    rangeValue: number = 0;
    rangeMin: number = 0;
    rangeMax: number = 100;
    isRangeDisabled: boolean = false;
}