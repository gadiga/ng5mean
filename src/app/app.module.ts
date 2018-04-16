import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {PostService} from "./post.service";
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from "@angular/http";
import { DetailsComponent } from './details/details.component';
import { LengthPipe } from './length.pipe';
import { JumpArrowComponent } from './jump-arrow/jump-arrow.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DetailsComponent,
    LengthPipe,
    JumpArrowComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
