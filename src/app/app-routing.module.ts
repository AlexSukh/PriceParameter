import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceParameterComponent } from './price-parameter/price-parameter.component';

const routes: Routes = [
  { path: 'price-parameter/create', component: PriceParameterComponent },
  { path: 'price-parameter/edit/:id', component: PriceParameterComponent },
  {
    path: 'price-parameter/preview/:id',
    component: PriceParameterComponent,
  },
  { path: '', redirectTo: 'price-parameter/create', pathMatch: 'full' },
  { path: '**', redirectTo: 'price-parameter/create' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
