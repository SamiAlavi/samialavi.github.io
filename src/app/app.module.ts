import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NgParticlesModule } from 'ng-particles';
import { ParticlesComponent } from './particles/particles.component';
import { MeshGradientComponent } from './mesh-gradient/mesh-gradient.component';
import { NgPrimeModule } from './ngprime.module';
import { BackgroundChooserComponent } from './background-chooser/background-chooser.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        BaseComponent,
        SplashScreenComponent,
        ParticlesComponent,
        MeshGradientComponent,
        BackgroundChooserComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgPrimeModule,
        NgParticlesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
