import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ErrorComponent } from './core/error/error.component';
import { MiniGamesComponent } from './mini-games/mini-games.component';
import { MathComponent } from './mini-games/math/math.component';
import { TickTackToeComponent } from './mini-games/tick-tack-toe/tick-tack-toe.component';
import { SnakeGameComponent } from './mini-games/snake-game/snake-game.component';



const routes: Routes = [{path: '',pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  { path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),},
  {path: 'about', component: AboutComponent},
  { path: 'error', component: ErrorComponent },
{ path: 'mini-games', component: MiniGamesComponent},
{ path: 'tictac', component: TickTackToeComponent},
{ path: 'math', component: MathComponent},
{ path: 'snake-game', component: SnakeGameComponent},
{path: '404', component: ErrorComponent},
{path: '**', redirectTo: `404`},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
