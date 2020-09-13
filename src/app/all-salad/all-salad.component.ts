import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import  *  as  data  from '../../assets/Json_files/salad.json';

@Component({
  selector: 'app-all-salad',
  templateUrl: './all-salad.component.html',
  styleUrls: ['./all-salad.component.css']
})
export class AllSaladComponent implements OnInit {
  sortby: any[];
  salads: any[];
  changeText:any;
  selecteditem: number;
  select_item_array: any;
  element: any;
  p: number;
  constructor() { }
  ngOnInit() {
    this.salads= data.salads;
    this.changeText=false;
    this.p= 1;

    this.sortby = [
      {
        State: "Price: Low to high",
      },
      {
        State: "Price: High to low",
      },
      {
        State: "A-Z",
      },
      {
        State: "Z-A"
      },
    ];
this.sortByPrice('price','asc');
}
  onChangeSortBy(paramSortBy){
   if(paramSortBy=='Price: Low to high'){
     this.sortByPrice('price','asc');
   }
   else if(paramSortBy=='Price: High to low'){
    this.sortByPrice('price','desc')
   }
   else if(paramSortBy=='A-Z'){
    this.sortByPrice('title','asc')
   }
   else if(paramSortBy=='Z-A'){
    this.sortByPrice('title','desc')
   }

  }
  sortByPrice(field:string,ordering:string){
if(ordering=='desc'){
    this.salads.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  else if(ordering=='asc'){

    this.salads.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  }
  onHoverId(paramId){
    this.salads= data.salads
    this.selecteditem = this.salads.findIndex(
      (obj) => obj.id == paramId

    );
    this.select_item_array= this.salads[this.selecteditem]

  }
}
