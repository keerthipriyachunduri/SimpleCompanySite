import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouter} from './app.routing';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import {ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent, ContactusComponent, ServicesComponent, PortfolioComponent, HeaderComponent, FooterComponent, ClientsComponent

  ],
  imports: [
    BrowserModule,AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
