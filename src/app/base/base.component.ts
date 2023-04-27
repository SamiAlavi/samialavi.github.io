import { Component } from '@angular/core';
import { tsParticles } from "tsparticles-engine";
import { StorageService } from '../services/storage.service';
import { StorageEnum } from '../helpers/enums';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent {
    backgroundColor = "#000";
    isSplashScreenVisible = true;

    constructor(private storageService: StorageService) {
        const isSplashScreenVisible = this.storageService.getLocalStorage(StorageEnum.SplashScreenVisible);
        this.isSplashScreenVisible = isSplashScreenVisible !== null ? Boolean(isSplashScreenVisible) : true;
    }

    isSplashScreenDestroyed(event: boolean) {
        this.isSplashScreenVisible = false;
        this.storageService.setLocalStorage(StorageEnum.SplashScreenVisible, "")
    }
}
