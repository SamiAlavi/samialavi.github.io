/*
*   TypeScript Wrapper for jordienr/Gradient.js
*   https://gist.github.com/jordienr/64bcf75f8b08641f205bd6a1a0d4ce1d
*/

import { normalizeColor, Gradient } from './Gradient.js';

class GradientWrapper {
    gradient: any;
    private playAnimation = true;

    constructor() {
        this.gradient = new Gradient();
    }

    get cssVarRetries(): number {
        return this.gradient.cssVarRetries;
    }

    set cssVarRetries(val: number) {
        this.gradient.cssVarRetries = val;
    }

    get maxCssVarRetries(): number {
        return this.gradient.maxCssVarRetries;
    }

    set maxCssVarRetries(val: number) {
        this.gradient.maxCssVarRetries = val;
    }

    get angle(): number {
        return this.gradient.maxCssVarRetries;
    }

    set angle(val: number) {
        this.gradient.maxCssVarRetries = val;
    }

    pause() {
        this.gradient.pause();
    }

    play() {
        this.gradient.play();
    }

    initGradient(cssSelector: string) {
        this.gradient.initGradient(cssSelector);
    }

    toggleColor(index: number) {
        this.gradient.toggleColor(index);
    }

    normalizeColor(hexCode: string): [number, number, number] {
        return (normalizeColor(hexCode) as [number, number, number]);
    }

    private normalizedRGBtoHex(color: [number, number, number]): string {
        const hexes = color.map((val) => {
            const x = (val * 255).toString(16);   //Convert to a base16 string
            return (x.length == 1) ? `0${x}` : x;   //Add zero if we get only one character
        })
        return `#${hexes.join("")}`;
    }

    private setBaseColor(color: [number, number, number]) {
        this.gradient.material.uniforms.u_baseColor.value = color;
    }

    private setWaveLayerColor(index: number, color: [number, number, number]) {
        this.gradient.material.uniforms.u_waveLayers.value[index].value.color.value = color;
    }

    private validateRGBColors() {
        const rgbColors: [number, number, number][] = [
            this.gradient.material.uniforms.u_baseColor.value,
            ...this.gradient.material.uniforms.u_waveLayers.value.map((val: any) => val.value.color.value),
        ];
        const hexColors = rgbColors.map((rgbColor) => this.normalizedRGBtoHex(rgbColor));
        const numUniqueColors = [... new Set(hexColors)].length;
        if (!numUniqueColors) {
            this.pause();
        }
        else if (this.playAnimation) {
            this.play();
        }
    }

    setColors(hexCodes: [string, string, string, string]) {
        hexCodes.forEach((hexCode, index) => {
            this.setColorAtIndex(index, hexCode);
        })
    }

    setColorAtIndex(index: number, hexCode: string) {
        const color = this.normalizeColor(hexCode);

        if (index === 0) {
            this.setBaseColor(color);
        }
        else {
            this.setWaveLayerColor(index - 1, color);
        }

        this.validateRGBColors();
    }
}

export { GradientWrapper };