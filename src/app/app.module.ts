import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GithubComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
