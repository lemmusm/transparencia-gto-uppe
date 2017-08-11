import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Y2013Component } from './components/pages/y2013/y2013.component';
import { Y2014Component } from './components/pages/y2014/y2014.component';
import { Y2015Component } from './components/pages/y2015/y2015.component';
import { Y2016Component } from './components/pages/y2016/y2016.component';
import { Y2017Component } from './components/pages/y2017/y2017.component';

//RUTAS
import {APP_ROUTING} from './app.routes';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResponsablesComponent } from './components/responsables/responsables.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Y2013Component,
    Y2014Component,
    Y2015Component,
    Y2016Component,
    Y2017Component,
    MenuComponent,
    BreadcrumbComponent,
    FooterComponent,
    ResponsablesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
