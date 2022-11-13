import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
products:any

  constructor(private api:ServicesService) { }

  ngOnInit(): void {
this.api.getallProducts().subscribe(res=>{
  this.products=res;
})
  }

}
