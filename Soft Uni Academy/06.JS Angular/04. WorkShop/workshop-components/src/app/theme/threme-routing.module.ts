import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { AddThemeComponent } from "./add-theme/add-theme.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";

const router: Routes = [
    {path: 'themes', children: [
        {path: '', pathMatch: 'full' ,component: MainComponent},
        {path: ':themeId', component: CurrentThemeComponent},
    ]}, 
    {path: 'add-theme', component: AddThemeComponent}]

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule],
})


export class ThemeRoutingModule {}