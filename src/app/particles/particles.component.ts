import { Component, Input } from '@angular/core';
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { particlesOptions } from './particle-options';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent {
  @Input() backgroundColor = "";

  particlesOptions;
  id = "tsparticles";

  constructor() {
    this.particlesOptions = {...particlesOptions};
  }

  ngOnInit() {
    this.setParticleOptions();

  }

  private setParticleOptions() {
    this.particlesOptions.background.color.value = this.backgroundColor;
  }
  

  particlesLoaded(container: Container): void {
      console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
      console.log(engine);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }
}