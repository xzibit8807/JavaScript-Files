import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ErrorComponent } from './core/error/error.component';
import { FooterComponent } from './core/footer/footer.component';
import { StartPageComponent } from './home/start-page/start-page.component';
import { DynamicPageComponent } from './home/dynamic-page/dynamic-page.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { MiniGamesComponent } from './mini-games/mini-games.component';
import { MathComponent } from './mini-games/math/math.component';
import { TickTackToeComponent } from './mini-games/tick-tack-toe/tick-tack-toe.component';
import { FormsModule } from '@angular/forms';
import { SnakeGameComponent } from './mini-games/snake-game/snake-game.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    FooterComponent,
    StartPageComponent,
    DynamicPageComponent,
    AboutComponent,
    HomeComponent,
    MiniGamesComponent,
    MathComponent,
    TickTackToeComponent,
    SnakeGameComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
