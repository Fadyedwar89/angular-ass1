import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import path from 'node:path';
import { FooterComponent } from './footer/footer.component';
import { StartFrameworkComponent } from './start-framework/start-framework.component';

export const routes: Routes = [
  { path: '', redirectTo: 'startFramework', pathMatch: 'full' },
  {
    path: 'startFramework',
    component: StartFrameworkComponent,
    title: 'startFramework',
  },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: 'portfolio', component: PortfolioComponent, title: 'portfolio' },
  { path: '**', component: NotfoundComponent, title: '404 not found' },
];
