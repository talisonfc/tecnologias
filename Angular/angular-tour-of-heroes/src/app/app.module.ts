import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TalisonComponent } from './talison/talison.component';
import { TesteComponent } from './teste/teste.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessegeService } from './messege.service';
import { ModuleModule } from './/module.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TalisonComponent,
    TesteComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuleModule
  ],
  providers: [HeroService, MessegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
