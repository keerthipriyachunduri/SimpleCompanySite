import {ModuleWithProviders} from  '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';
@NgModule({

imports: [
RouterModule.forRoot([
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus', component: PortfolioComponent},
  {path:'services', component: ServicesComponent},
  {path:'clients', component: ClientsComponent}


])

],
exports: [RouterModule]

})

export class AppRouter{


}
