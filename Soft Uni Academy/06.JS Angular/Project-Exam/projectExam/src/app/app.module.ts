import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { appInterceptorProvider } from './app.interceptor';
import { ErrorComponent } from './core/error/error.component';
import { UserModule } from './user/user.module';
import { MaxCountDirective } from './shared/validators/max-count.directive';
import { StartPageComponent } from './home/start-page/start-page.component';
import { DynamicPageComponent } from './home/dynamic-page/dynamic-page.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { AddGameComponent } from './catalog/add-game/add-game.component';
import { CommentSectionComponent } from './home/about/comment-section/comment-section.component';

// import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ErrorComponent,
    MaxCountDirective,
    StartPageComponent,
    DynamicPageComponent,
    AboutComponent,
    ContactComponent,
    CatalogComponent,
    AddGameComponent,
    CommentSectionComponent,
    // AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     UserModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

