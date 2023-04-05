import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = [
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
