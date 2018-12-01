import * as Kernel from '../kernel';
import * as Pixel from '../pixel';

import {
  ImgstryBrowserThread,
  ThreadBrowserOptions,
} from './worker/browser.thread';
import {
  ImgstryEditor,
  ImgstryProcessor,
  OperationOption,
} from '../core';

import { BindUtility } from '../decorators/bind-utility.decorator';
import { getCanvas } from '../utils/dom';

export type IPixel = {
  [K in keyof typeof Pixel]: typeof Pixel[K];
};

export type IKernel = {
  [K in keyof typeof Kernel]: typeof Kernel[K];
};

export interface ImgstryBrowserOptions {
  thread: ThreadBrowserOptions;
}

const DEFAULT_OPTIONS: ImgstryBrowserOptions = {
  thread: {
    isEnabled: !!Worker,
    isDevelopment: false,
    host: {
      url: `${document.location.protocol}//${document.location.host}/`,
      scriptDirectory: 'dist/',
    },
  },
};

const assignDefault = (source: Partial<ImgstryBrowserOptions>): ImgstryBrowserOptions => {
  source = source || {} as ImgstryBrowserOptions;
  source.thread = source.thread || {} as ThreadBrowserOptions;
  source.thread.host = source.thread.host || {} as any;

  return {
    thread: {
      isEnabled: source.thread.isEnabled ||
        DEFAULT_OPTIONS.thread.isEnabled,
      isDevelopment: source.thread.isDevelopment ||
        DEFAULT_OPTIONS.thread.isDevelopment,
      host: {
        url: source.thread.host.url ||
          DEFAULT_OPTIONS.thread.host.url,
        scriptDirectory: source.thread.host.scriptDirectory ||
          DEFAULT_OPTIONS.thread.host.scriptDirectory,
      },
    },
  };
};

/**
 * (Exposes image processing methods for html canvas)
 *
 * @class Imgstry
 */
export class Imgstry extends ImgstryProcessor implements ImgstryEditor<Imgstry> {
  /**
   * Exposes all utilities required for a fruitful life alongside imstry.
   *
   * @static
   * @type {IKernel & IPixel}
   */
  @BindUtility(Kernel, Pixel)
  public static Utility: IKernel & IPixel;

  public static getCanvas = getCanvas;

  public readonly context: CanvasRenderingContext2D;
  public readonly canvas: HTMLCanvasElement;
  public width: number;
  public height: number;

  private _operations: OperationOption[] = [];

  /**
   * Creates an instance of Imgstry.
   *
   * @param {HTMLCanvasElement} canvas (specifies the canvas base for imgstry)
   */
  constructor(
    elementIdOrCanvas: string | HTMLCanvasElement,
    private _options?: Partial<ImgstryBrowserOptions>,
  ) {
    super();
    this._options = assignDefault(_options) as ImgstryBrowserOptions;
    this.canvas = Imgstry.getCanvas(elementIdOrCanvas);
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.original = this.imageData;
  }

  /**
   * Draws an image on the canvas.
   *
   * @param {HTMLImageElement} image
   * @memberof Imgstry
   */
  public drawImage(image: HTMLImageElement) {
    this.context.drawImage(image, 0, 0);
    this.original = this.imageData;
  }

  public toDataUrl(type = 'image/png'): string {
    return this.canvas.toDataURL(type);
  }

  public reset(): ImgstryProcessor {
    this.imageData = this.original;
    return <ImgstryProcessor>this;
  }

  public clone(data: ImageData): ImageData {
    return this.context.createImageData(data);
  }

  public get imageData(): ImageData {
    return this.context.getImageData(0, 0, this.width, this.height);
  }

  public set imageData(image: ImageData) {
    this.context.putImageData(image, 0, 0);
  }

  public blackAndWhite(ratio?: [number, number, number]): Imgstry {
    this._operations.push({
      name: 'blackAndWhite',
      value: ratio,
      priority: this._operations.length,
    });
    return this;
  }

  public contrast(value: number): Imgstry {
    this._operations.push({
      name: 'contrast',
      value: value,
      priority: this._operations.length,
    });
    return this;
  }

  public brightness(value: number): Imgstry {
    this._operations.push({
      name: 'brightness',
      value: value,
      priority: this._operations.length,
    });
    return this;
  }

  public saturation(value: number): Imgstry {
    this._operations.push({
      name: 'saturation',
      value: value,
      priority: this._operations.length,
    });
    return this;
  }

  public hue(value: number): Imgstry {
    this._operations.push({
      name: 'hue',
      value: value,
      priority: this._operations.length,
    });
    return this;
  }

  public sepia(value: number): Imgstry {
    this._operations.push({
      name: 'sepia',
      value: value,
      priority: this._operations.length,
    });
    return this;
  }

  public gamma(value: number): Imgstry {
    this._operations.push({
      name: 'gamma',
      value: value,
      priority: this._operations.length,
    });
    return this;
  }

  public noise(value: number): Imgstry {
    this._operations.push({
      name: 'noise',
      value: value,
      priority: this._operations.length,
    });
    return this;
  }

  public vibrance(value: number): Imgstry {
    this._operations.push({
      name: 'vibrance',
      value: value,
      priority: this._operations.length,
    });
    return this;
  }

  public invert(): Imgstry {
    this._operations.push({
      name: 'invert',
      value: null,
      priority: this._operations.length,
    });
    return this;
  }

  public tint(color: string): Imgstry {
    this._operations.push({
      name: 'tint',
      value: color,
      priority: this._operations.length,
    });
    return this;
  }

  public fill(color: string): Imgstry {
    this._operations.push({
      name: 'fill',
      value: color,
      priority: this._operations.length,
    });
    return this;
  }

  public convolve(kernel: Kernel.Kernel | number[][]): Imgstry {
    this._operations.push({
      name: 'convolve',
      value: kernel,
      priority: this._operations.length,
    });
    return this;
  }

  public clear() {
    this._operations = [];
    return this;
  }

  public renderSync(): Imgstry {
    this.batch(this._operations);
    return this.clear();
  }

  public async render(): Promise<Imgstry> {
    const result = await new ImgstryBrowserThread(this._options.thread)
      .run({
        imageData: this.imageData,
        operations: this._operations,
      });
    this.imageData = result.imageData;
    return this.clear();
  }
}
