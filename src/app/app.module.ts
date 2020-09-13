import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { DetailsComponent } from './details/details.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllSaladComponent } from './all-salad/all-salad.component';
import { CustomSortByPipe } from './_pipe/custom-sort-by.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
// import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent,
    DetailsComponent,
    BsNavbarComponent,
    PageNotFoundComponent,
    AllSaladComponent,
    CustomSortByPipe,
    ComingSoonComponent,


  ],
  imports: [
    BrowserModule,FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
