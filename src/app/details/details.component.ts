import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import  *  as  data  from '../../assets/Json_files/salad.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  image_url: string;
  item_id: any;
  salads: any[];
  selecteditem: number;
  select_item_array: any;
  constructor(  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get("id");
    console.log(this.item_id);
    this.salads= data.salads
    this.selecteditem = this.salads.findIndex(
      (obj) => obj.id == this.item_id

    );
    this.select_item_array= this.salads[this.selecteditem]
    console.log("Selected item"+JSON.stringify(this.select_item_array))


  }

}
