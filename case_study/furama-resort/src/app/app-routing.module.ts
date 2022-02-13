import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent} from './customer/customer-list/customer-list.component';
import { ServiceListComponent} from './service/service-list/service-list.component';

const routes: Routes = [
  {path: '', component: CustomerListComponent},
  {path: 'serviceList', component: ServiceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
