import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ProductImagesModel } from '../model/product-image-model';

@Injectable({
  providedIn: 'root',
})
export class ProductImagesService {
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient
  ) {}

  add(formData: any) {
    let api = this.apiUrl + 'ProductImages/add';
    return this.httpClient.post(api, formData);
  }

  delete(productImage: ProductImagesModel) {
    let api = this.apiUrl + 'ProductImages/delete';
    return this.httpClient.post(api, productImage);
  }

  getList(productId: number) {
    let api = this.apiUrl + 'ProductImages/GetListByProductId/' + productId;
    return this.httpClient.get(api);
  }

  setMainImage(id: number) {
    let api = this.apiUrl + 'ProductImages/SetMainImage/' + id;
    return this.httpClient.get(api);
  }
}
