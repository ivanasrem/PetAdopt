import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { PetsComponent } from './pets/pets.component';
import {HttpClientModule} from '@angular/common/http';
import { PetItemComponent } from './pets/pet-item/pet-item.component';
import { PetPageComponent } from './pets/pet-page/pet-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    AdoptionsComponent,
    PetsComponent,
    PetItemComponent,
    PetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
