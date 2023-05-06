import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventEmitterService {

    gradientPause = new EventEmitter<void>();
    gradientStart = new EventEmitter<void>();

    constructor() { }
}
