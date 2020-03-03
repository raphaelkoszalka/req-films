import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ClientsComponent} from './pages/clients/clients.component';
import {ContactComponent} from './pages/contact/contact.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'req-films',
  component: AboutUsComponent,
}, {
  path: 'portfolio',
  component: PortfolioComponent
}, {
  path: 'parceiros',
  component: ClientsComponent
}, {
  path: 'contato',
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
