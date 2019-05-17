import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'ville-select/:id', loadChildren: './ville-select/ville-select.module#VilleSelectPageModule' },
  { path: 'ville-insert', loadChildren: './ville-insert/ville-insert.module#VilleInsertPageModule' },
  { path: 'ville-update/:id', loadChildren: './ville-update/ville-update.module#VilleUpdatePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
