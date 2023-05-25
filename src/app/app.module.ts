import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponentComponent } from './first-component/first-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { UserListComponent } from './user-list/user-list.component'; 
import { UserInfoService } from './services/user-info.service';
import { IUserInfoService } from './services/abstract/user-info.service.abstract';
import { environment } from 'src/environments/environment.development';
import { MockUserService } from './services/mock/user-info.service.mock';
import {MatTableModule} from '@angular/material/table'; 
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponent,
    ThirdComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [{
    provide:IUserInfoService,
    useClass: environment.useMock?MockUserService:UserInfoService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
