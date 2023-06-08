import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { GotyPageComponent } from './pages/goty-page/goty-page.component';
import { ComponentsModule } from './components/components.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

@NgModule({
  declarations: [AppComponent, InicioPageComponent, GotyPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFunctions(() => getFunctions()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
