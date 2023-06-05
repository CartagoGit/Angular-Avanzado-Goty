import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { GotyPageComponent } from './pages/goty-page/goty-page.component';

@NgModule({
  declarations: [AppComponent, InicioPageComponent, GotyPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
