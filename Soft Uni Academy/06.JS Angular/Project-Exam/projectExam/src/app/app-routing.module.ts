import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { AddGameComponent } from './catalog/add-game/add-game.component';
import { TictactoeComponent } from './home/contact/game/tictactoe/tictactoe.component';
import { MathComponent } from './home/contact/game/math/math.component';


const routes: Routes = [{path: '',pathMatch: 'full', redirectTo: '/home'},
{path: 'home', component: HomeComponent},
{ path: 'auth',
  loadChildren: () => import('./user/user.module').then((m) => m.UserModule),},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'add-game', component: AddGameComponent},
{ path: 'error', component: ErrorComponent },
{ path: 'tictac', component: TictactoeComponent},
{ path: 'math', component: MathComponent},
{path: '404', component: ErrorComponent},
{path: '**', redirectTo: `404`},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


