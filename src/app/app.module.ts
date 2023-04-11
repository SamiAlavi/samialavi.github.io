import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NgParticlesModule } from 'ng-particles';
import { ParticlesComponent } from './particles/particles.component';
import { MeshGradientComponent } from './mesh-gradient/mesh-gradient.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SplashScreenComponent,
    ParticlesComponent,
    MeshGradientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
