import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListDetailComponent } from './price-list-detail.component';
import { PriceListDetailPipe } from './pipe/price-list-detail.pipe';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes = [
  {
    path: '',
    component: PriceListDetailComponent,
  },
];
@NgModule({
  declarations: [PriceListDetailComponent, PriceListDetailPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SweetAlert2Module.forRoot(),
  ],
  exports: [PriceListDetailComponent],
})
export class PriceListDetailModule {}
