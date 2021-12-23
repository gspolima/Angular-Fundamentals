import { Component } from "@angular/core";

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
})
export class ProductListComponent {
    pageTitle: string = "Product List";
    imageWidthEm: number = 4;
    imageMarginEm: number = 0.5;
    showImage: boolean = false;
    listFilter: string = 'cart';

    products: any[] = [
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
          }
    ];

    onToggleImage(): void {
      this.showImage = !this.showImage;
    }

    formatPrice(price: number): string {
      return `$${price.toFixed(2)}`;
    }
}