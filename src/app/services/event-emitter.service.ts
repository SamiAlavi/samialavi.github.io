import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventEmitterService {

    gradientPause = new EventEmitter<void>();
    gradientStart = new EventEmitter<void>();
    gradientUpdateColors = new EventEmitter<[string, string, string, string]>();

    constructor() { }
}
