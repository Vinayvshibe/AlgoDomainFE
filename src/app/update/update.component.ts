import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product:Product = new Product
  productId:any
  name:any
  productType:any
  category:any
  basePrice:any
  modelId:any
    constructor(private api:ServicesService) { }
  
    ngOnInit(): void {
      
    }
  update(){
    this.modelId=this.productId;
    this.product.productId=this.productId;
    this.api.getById(this.productId).subscribe(res=>{
      this.product.basePrice=res.basePrice;
      this.product.productType=res.productType;
      this.product.category=res.category;
      this.product.name=res.name;
    })
    
    if(this.basePrice!=null && this.basePrice!=undefined){
      this.product.basePrice=this.basePrice;
    }
    if(this.category!=null && this.category!=undefined){
      this.product.category=this.category;
    }
    if(this.name!=null && this.name!=undefined){
      this.product.name=this.name;
    }
    if(this.productType!=null && this.productType!=undefined){
      this.product.productType=this.productType;
    }
    console.log(this.product)
    this.api.updateProduct(this.product,this.productId).subscribe(res=>{
      console.log(res);
    })
  
    
  }
    // idmodel(){

    // }
}
