import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  product:Product = new Product
productId:any
name:any
productType:any
category:any
basePrice:any
  constructor(private api:ServicesService) { }

  ngOnInit(): void {
    
  }
add(){
  this.product.basePrice=this.basePrice;
  this.product.category=this.category;
  this.product.name=this.name;
  this.product.productId=this.productId;
  this.product.productType=this.productType

  this.api.addProduct(this.product).subscribe(res=>{
    console.log(res);
  })
}

}
