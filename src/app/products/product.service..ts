import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, range } from "rxjs";
import { filter, map } from "rxjs/operators";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {}

    private baseURL = '../../api/products/products.json';

    getProducts(): IProduct[] {
        return [
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
                "productName": "Xbox Controller",
                "productCode": "XMS-0001",
                "releaseDate": "2021-11-15",
                "description": "Comfortable with long-lasting batteries",
                "price": 25.9,
                "starRating": 4.9,
                "imageUrl": "assets/images/xbox-controller.png"
            }
        ]
    }

    getProducts2(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseURL);
    }
}