import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import {RouterModule,Routes} from '@angular/router';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';
import { FirstComponent } from './first/first.component';


const ROUTES:Routes= [
  {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
  },
  {
  path: 'second',
  component:SecondComponentComponent
  },
  {
    path: 'third',
    component:ThirdcomponentComponent
    },
    {
      path: 'first',
      component:FirstComponent
      },
    

  ]; 
@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdcomponentComponent,
    FirstComponent,

  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES) 
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
