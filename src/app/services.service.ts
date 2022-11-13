import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl:String="http://localhost:8082"
  constructor(private http:HttpClient) { }
  public addProduct(product:any){
    return this.http.post<Product>(this.baseUrl+"/product/add",product);
  }
  public getallProducts(){
    return this.http.get<any>(this.baseUrl+"/product/all");
  }
  public getById(productId:any){
    return this.http.get<any>(this.baseUrl+"/product/id/"+productId);
  }
  public updateProduct(product:any,productId:any){
    //console.log(product);
    return this.http.put<any>(this.baseUrl+"/product/update/"+productId,product);
  }
  public deleteProduct(productId:any){
return this.http.delete<any>(this.baseUrl+"/product/delete/"+productId);
  }
}
