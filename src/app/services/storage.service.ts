import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    private setStorage(storage: Storage, key: string, value: string) {
        storage.setItem(key, value);
    }

    private getStorage(storage: Storage, key: string): string | null {
        return storage.getItem(key);
    }

    private removeStorage(storage: Storage, key: string) {
        storage.removeItem(key);
    }

    private clearStorage(storage: Storage) {
        storage.clear();
    }

    setLocalStorage(key: string, value: string) {
        this.setStorage(localStorage, key, value);
    }

    getLocalStorage(key: string): string | null {
        return this.getStorage(localStorage, key);
    }

    removeLocalStorage(key: string) {
        this.removeStorage(localStorage, key);
    }

    clearLocalStorage() {
        this.clearStorage(localStorage);
    }

    setSessionStorage(key: string, value: string) {
        this.setStorage(sessionStorage, key, value);
    }

    getSessionStorage(key: string): string | null {
        return this.getStorage(sessionStorage, key);
    }

    removeSessionStorage(key: string) {
        this.removeStorage(sessionStorage, key);
    }

    clearSessionStorage() {
        this.clearStorage(sessionStorage);
    }
}
