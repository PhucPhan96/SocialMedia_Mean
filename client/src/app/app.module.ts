import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { EditprofComponent } from './components/editprof/editprof.component';
import { ChatComponent } from './components/chat/chat.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { FriendlistComponent } from './components/friendlist/friendlist.component';
import { NewfeedsComponent } from './components/newfeeds/newfeeds.component';
import { EditBasicComponent } from './components/edit-basic/edit-basic.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';

const appRoutes : Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: 'home', component: NewfeedsComponent },
      { path: 'friend', component: FriendlistComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'createEvent', component: CreateEventComponent }
    ]
  },
  {
    path: 'editprof',
    component: EditprofComponent,
    children: [
      { path: 'basicInfo', component: EditBasicComponent },
      { path: 'changePass', component: ChangePassComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    EditprofComponent,
    ChatComponent,
    CreateEventComponent,
    FriendlistComponent,
    NewfeedsComponent,
    EditBasicComponent,
    ChangePassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
