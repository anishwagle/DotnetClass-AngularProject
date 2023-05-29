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
import {HttpClientModule} from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponentComponent } from './delete-dialog-component/delete-dialog-component.component'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponent,
    ThirdComponent,
    UserListComponent,
    UserFormComponent,
    DeleteDialogComponentComponent
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
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [{
    provide:IUserInfoService,
    useClass: environment.useMock?MockUserService:UserInfoService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
