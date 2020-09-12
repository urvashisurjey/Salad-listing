import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route: any;

  title = 'Salad-listing';
constructor(    location: Location,
  private router: Router,
  private ActivatedRoute: ActivatedRoute

  ){
    this.route = location.path();

}
}
