import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  display1: boolean = false;
  see1: string = 'see all';

  display2: boolean = false;
  see2: string = 'see all';

  display3: boolean = false;
  see3: string = 'see all';

  display4: boolean = false;
  see4: string = 'see all';

  show1() {
    if (this.see1 === 'less') {
      this.display1 = false;
      this.see1 = 'see all';
    } else {
      this.display1 = true;
      this.see1 = 'less';
    }
  }
  show2() {
    if (this.see2 === 'less') {
      this.display2 = false;
      this.see2 = 'see all';
    } else {
      this.display2 = true;
      this.see2 = 'less';
    }
  }

  show3() {
    if (this.see3 === 'less') {
      this.display3 = false;
      this.see3 = 'see all';
    } else {
      this.display3 = true;
      this.see3 = 'less';
    }
  }

  show4() {
    if (this.see4 === 'less') {
      this.display4 = false;
      this.see4 = 'see all';
    } else {
      this.display4 = true;
      this.see4 = 'less';
    }
  }
  bags = [
    {
      id: '101',
      name: 'Backpacks',
      price: 1000.0,
      ratings: 3.5,
      image: 'assets/products/bag1.jpg',
    },
    {
      id: '102',
      name: 'Skybag',
      price: 4000.0,
      ratings: 4.5,
      image: 'assets/products/bag2.jpg',
    },
    {
      id: '103',
      name: 'Luggage bag',
      price: 500.0,
      ratings: 3.5,
      image: 'assets/products/bag3.jpg',
    },
    {
      id: '104',
      name: 'Luggage bag',
      price: 3000.0,
      ratings: 4.0,
      image: 'assets/products/bag4.jpg',
    },
    {
      id: '105',
      name: 'Safari',
      price: 1500.0,
      ratings: 4.2,
      image: 'assets/products/bag5.jpg',
    },
    {
      id: '106',
      name: 'Lenova',
      price: 1000.0,
      ratings: 4.0,
      image: 'assets/products/bag6.jpg',
    },
    {
      id: '107',
      name: 'Handbag',
      price: 2500.0,
      ratings: 4.5,
      image: 'assets/products/bag7.jpg',
    },
    {
      id: '108',
      name: 'Luggage bag',
      price: 4000.0,
      ratings: 4.0,
      image: 'assets/products/bag8.jpg',
    },
  ];
  laptops = [
    {
      id: '101',
      name: 'Hp',
      price: 10000.0,
      ratings: 3.5,
      image: 'assets/products/lap1.jpg',
    },
    {
      id: '102',
      name: 'Lenova',
      price: 15000.0,
      ratings: 3.5,
      image: 'assets/products/lap2.jpg',
    },
    {
      id: '103',
      name: 'Asus',
      price: 30000.0,
      ratings: 3.5,
      image: 'assets/products/lap3.jpg',
    },
    {
      id: '104',
      name: 'Asus',
      price: 35000.0,
      ratings: 4.0,
      image: 'assets/products/lap4.jpg',
    },
    {
      id: '105',
      name: 'Dell',
      price: 15000.0,
      ratings: 4.2,
      image: 'assets/products/lap5.jpg',
    },
    {
      id: '106',
      name: 'Lenova',
      price: 20000.0,
      ratings: 4.0,
      image: 'assets/products/lap6.jpg',
    },
    {
      id: '107',
      name: 'Hp',
      price: 25000.0,
      ratings: 4.5,
      image: 'assets/products/lap7.jpg',
    },
  ];
  phones = [
    {
      id: '101',
      name: 'Tecno spark',
      price: 9000.0,
      ratings: 3.5,
      image: 'assets/products/phone1.jpg',
    },
    {
      id: '102',
      name: 'Lava',
      price: 10000.0,
      ratings: 3.5,
      image: 'assets/products/phone2.jpg',
    },
    {
      id: '103',
      name: 'Redmi',
      price: 12000.0,
      ratings: 4.0,
      image: 'assets/products/phone3.jpg',
    },
    {
      id: '104',
      name: 'Redmi 9A',
      price: 15000.0,
      ratings: 4.3,
      image: 'assets/products/phone4.jpg',
    },
    {
      id: '105',
      name: 'Samsung',
      price: 15000.0,
      ratings: 4.2,
      image: 'assets/products/phone5.jpg',
    },
    {
      id: '106',
      name: 'Realme',
      price: 20000.0,
      ratings: 4.5,
      image: 'assets/products/phone6.jpg',
    },
    {
      id: '107',
      name: 'Nokia',
      price: 10000.0,
      ratings: 4.5,
      image: 'assets/products/phone7.jpg',
    },
  ];

  wallets = [
    {
      id: '101',
      name: 'Hp',
      price: 1000.0,
      ratings: 4.0,
      image: 'assets/products/wallet1.jpg',
    },
    {
      id: '102',
      name: 'Urban Forest',
      price: 1000.0,
      ratings: 3.5,
      image: 'assets/products/wallet2.jpg',
    },
    {
      id: '103',
      name: 'Urban Forest',
      price: 500.0,
      ratings: 3.5,
      image: 'assets/products/wallet3.jpg',
    },
    {
      id: '104',
      name: 'Urban Forest',
      price: 3000.0,
      ratings: 4.0,
      image: 'assets/products/wallet4.jpg',
    },
    {
      id: '105',
      name: 'Napa Hide',
      price: 600.0,
      ratings: 4.2,
      image: 'assets/products/wallet5.jpg',
    },
    {
      id: '106',
      name: 'Rigo Hill',
      price: 900.0,
      ratings: 4.0,
      image: 'assets/products/wallet6.jpg',
    },
    {
      id: '107',
      name: 'London Wallet',
      price: 2500.0,
      ratings: 4.5,
      image: 'assets/products/wallet7.jpg',
    },

    {
      id: '108',
      name: 'Priority Pass',
      price: 2000.0,
      ratings: 4.5,
      image: 'assets/products/wallet7.jpg',
    },
  ];
}
