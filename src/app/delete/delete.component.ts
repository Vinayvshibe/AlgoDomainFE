import { APP_ID, Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
productId:any
  constructor(private api:ServicesService) { }

  ngOnInit(): void {
  }
delete(){
  this.api.deleteProduct(this.productId).subscribe(res=>{
    alert("deleted")
  })
}
}
