import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  route:string
  constructor( location: Location,
    private router: Router,
    private ActivatedRoute: ActivatedRoute) {

     }

  ngOnInit() {

  }


}
