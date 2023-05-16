import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    SkillsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
