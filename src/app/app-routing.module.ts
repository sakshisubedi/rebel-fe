import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandListComponent } from './components/brand-list/brand-list.component';

const routes: Routes = [
  {
    path: 'brandList',
    component: BrandListComponent,
  },
  {
    path: '',
    redirectTo: 'brandList',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'brandList'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
exports: [RouterModule]
})
export class AppRoutingModule { }
