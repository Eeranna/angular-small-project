import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = "I am a parent";

  messageFromChild: any;

  products: any;

  constructor(private service: ServiceService) {
  }

receiveMessage(event: any) {
  this.messageFromChild = event;
}

ngOnInit(): void {
  this.service.getProducts().subscribe((data:any) => {
    this.products = data;
    console.log(this.products);
  })
}

deleteProduct(index: number) {
  this.products.slice(index);
}


}
