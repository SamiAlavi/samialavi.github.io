import { Component } from '@angular/core';
import { tsParticles } from "tsparticles-engine";
import { StorageEnum } from '../helpers/enums';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent {
    backgroundColor = "#000";
    isSplashScreenVisible = true;

    constructor() {
        const isSplashScreenVisible = localStorage.getItem(StorageEnum.SplashScreenVisible);
        this.isSplashScreenVisible = isSplashScreenVisible !== null ? Boolean(isSplashScreenVisible) : true;
    }

    isSplashScreenDestroyed(event: boolean) {
        this.isSplashScreenVisible = false;
        localStorage.setItem(StorageEnum.SplashScreenVisible, "")
    }
}
