import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-demo-c0322-g1',
  templateUrl: './demo-c0322-g1.component.html',
  styleUrls: ['./demo-c0322-g1.component.css']
})
export class DemoC0322G1Component implements OnInit {
  index = 0;
  title = 'crudAngular';
  products: Product[] = [];
  product: Product = new Product(0, "" ,  "", 0);
  productEdit: Product = new Product(0,  "" , "", 0);
  constructor() {
    this.products.push(new Product(1, "oto","https://st.quantrimang.com/photos/image/2019/10/31/hinh-nen-o-to-dep-5.jpg",500))
    this.products.push(new Product(2, "oto","https://storage.googleapis.com/f1-cms/2020/08/b93bd613-20200826_092520.jpg",500))
    this.products.push(new Product(3, "oto","https://menback.com/wp-content/uploads/2022/01/xe-o-to-dat-nhat-the-gioi-menback.jpg",500))
  }

  create(): void{
    this.products.push(this.product);
    this.productEdit = new Product(0,"","",0);
  }

  delete(index: number): void{
    this.products.splice(index,1);
  }

  ngOnInit() {
  }

  showEdit(i: number) {
    this.productEdit = this.products[i];
    this.productEdit.id = this.products[i].id;
    this.productEdit.name = this.products[i].name;
    this.productEdit.img = this.products[i].img;
    this.productEdit.price = this.products[i].price;
    this.index = i;
  }

  edit(index: number){
    this.products[index] = this.productEdit;
    this.productEdit = new Product(0, "", "", 0);

  }
}
