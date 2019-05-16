import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VilleInsertPage } from './ville-insert.page';

const routes: Routes = [
  {
    path: '',
    component: VilleInsertPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VilleInsertPage]
})
export class VilleInsertPageModule {}
