import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { AppService } from './app.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,FormsModule],
  providers:[AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private service: AppService) {

  }

  title = 'task';
  data: any = []

  ngOnInit(): void {
    this.getAllList()
  }

  getAllList () {
    this.data = this.service.getProducts().subscribe(resp => {
      console.log(resp);
      this.data = resp;
    });
  }

  redirectToPage(id: any) {
    this.http.get('https://659a7a63652b843dea53982f.mockapi.io/Profile/' + id).subscribe(resp => {
    })
  }

  saveToDatabase(value: any) {
    const paylaod = {
      "createdAt": "2024-01-07T01:22:44.431Z",
      "name": "Liyakat",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/240.jpg",
    }
    this.http.post('https://659a7a63652b843dea53982f.mockapi.io/Profile', paylaod).subscribe(resp => {
    })
  }

  deleteProduct(value: any) {
   this.service.deleteProduct(value).subscribe(resp => {
    alert("Delete succesfully");
    this.getAllList();
   })
  }

  
  response = {
    "customerInformatino": {
      "firstname": "Liyakat",
      "lastname": "Hussain",
      "CoursesEnrolled": [
        {
          "id": 1,
          "courseName": "Angular Course",
          "duration": "30",
          "ratings": "5",
          "totalLectures": 5,
          "completedLecture": 1,
          "tutorName": "Test",
          "price": 400,
          "topics": [
            "What is Angular",
            "Component in Angular",
            "Module in Angular",
            "Services in Angular",
            "Directive in Angular"
          ]
        },
        {
          "id": 2,
          "courseName": "React Course",
          "duration": "15",
          "ratings": "4",
          "totalLectures": 5,
          "completedLecture": 1,
          "tutorName": "Test 2",
          "price": 500,
          "topics": [
            "What is React",
            "Component in React",
            "Module in React",
            "Services in React",
            "Directive in React"
          ]
        }
      ]
    }
  }
  // name = "Liyakat";


  // GetValue(param: any){
  //   alert(param)
  // }

  // response = {
  //   customerInfo: [{
  //     firstName: "Adnan",
  //     lastName: "Hussain",
  //     age: "18",
  //     products: [{
  //       productName: "Hp",
  //       sku: "U2100",
  //       price: "20,000"
  //     },
  //     {
  //       productName: "Asus",
  //       sku: "Z2200",
  //       price: "30,000"
  //     },
  //     {
  //       productName: "Hp",
  //       sku: "U2100",
  //       price: "20,000"
  //     },
  //     {
  //       productName: "Asus",
  //       sku: "Z2200",
  //       price: "30,000"
  //     },
  //     {
  //       productName: "Hp",
  //       sku: "U2100",
  //       price: "20,000"
  //     },
  //     {
  //       productName: "Asus",
  //       sku: "Z2200",
  //       price: "30,000"
  //     }]
  //   },
  //   {
  //     firstName: "Kavya",
  //     lastName: "Dadhich",
  //     age: "19",
  //     products: [{
  //       productName: "Hp",
  //       sku: "U2300",
  //       price: "15,000"
  //     },
  //     {
  //       productName: "Asus",
  //       sku: "Z2400",
  //       price: "25,000"
  //     }]
  //   },
  //   {
  //     firstName: "Nadim",
  //     lastName: "Dayr",
  //     age: "20",
  //     products: [{
  //       productName: "Hp",
  //       sku: "U2500",
  //       price: "35,000"
  //     },
  //     {
  //       productName: "Asus",
  //       sku: "Z2600",
  //       price: "40,000"
  //     }]
  //   }]
  // }
}

