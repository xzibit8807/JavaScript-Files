import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { ThemesListComponents } from './theme/themes-list/themes-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-list/post-item/post-item.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';
import { UserModule } from './user/user.module'; 
import { ThemeModule } from './theme/theme.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { WelcomeMsgComponent } from './shared/welcome-msg/welcome-msg.component';


@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    AddThemeComponent,
    HomeComponent,
    ErrorComponent,
    WelcomeMsgComponent,
    
  ], 
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    ThemeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
