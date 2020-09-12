import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllSaladComponent } from './all-salad/all-salad.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  { path: "", redirectTo: "listing-page", pathMatch: "full" },

  {
    path:"listing-page",
    component:ListingPageComponent,
    children:[
       {
         path:"allsalad",
         component: AllSaladComponent
       }
    ]
  },
{
  path:"details/:id",
  component:DetailsComponent
},
{
  path:"comingsoon",
  component:ComingSoonComponent
},
  {
    path: "pagenotfound",
    component: PageNotFoundComponent  }
,
  { path: "**", redirectTo: "pagenotfound" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
