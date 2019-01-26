import {
  Hsv,
  Rgb,
} from '~pixel';

import { COLOR_MAP } from 'test/color';
import { Operation } from '~core';
import { expect } from 'chai';
import { hexToRgb } from 'test/utils';

describe('Image operations', () => {
  context('black and white', () => {
    it('should flatten channel', () => {
      const pixel = new Rgb({
        r: 128,
        g: 190,
        b: 255,
      });

      const result: Rgb = Operation.blackAndWhite()(pixel);

      expect(result.r).equal(result.g);
      expect(result.g).equal(result.b);
    });

    it('should ignore ratio if sum is not 1', () => {
      const pixel = new Rgb({
        r: 128,
        g: 190,
        b: 255,
      });

      let result: Rgb;
      result = Operation.blackAndWhite([1, 1, 1])(pixel);

      expect(result.r).equal(result.g);
      expect(result.g).equal(result.b);

      result = Operation.blackAndWhite([.3, .3, .3])(pixel);

      expect(result.r).equal(result.g);
      expect(result.g).equal(result.b);
    });

    it('should apply provided priority ratio', () => {
      for (let i = 1e-2; i < 1; i += 1e-2) {
        const ratio: [number, number, number] = [i, (1 - i) / 2, (1 - i) / 2];

        const pixel = new Rgb({
          r: 128,
          g: 190,
          b: 255,
        });

        const result: Rgb = Operation.blackAndWhite(ratio)(pixel);

        const rRatio = (result.r - ratio[1] * pixel.g - ratio[2] * pixel.b) / pixel.r;
        expect(rRatio).approximately(ratio[0], 1e-9);

        const gRatio = (result.g - ratio[0] * pixel.r - ratio[2] * pixel.b) / pixel.g;
        expect(gRatio).approximately(ratio[1], 1e-9);

        const bRatio = (result.b - ratio[0] * pixel.r - ratio[1] * pixel.g) / pixel.b;
        expect(bRatio).approximately(ratio[2], 1e-9);
      }
    });
  });

  context('hue', () => {
    [0, 30, 60, 120, 180]
      .forEach(hue => {
        it(`should shift hue value by ${hue}`, () => {
          const pixel: Hsv = new Hsv({
            h: 240,
            s: .6,
            v: .6,
          });

          const result: Hsv = Operation.hue(hue)(pixel.toRgb()).toHsv();
          const expected = pixel.h + hue;
          if (
            expected === 0 ||
            expected === 360
          ) {
            expect(result.h).oneOf([0, 360]);
          } else {
            expect(result.h).equal((pixel.h + hue) % 361);
          }
        });
      });

    [-180, -120, -60, -30, 0]
      .forEach(hue => {
        it(`should shift hue value by ${hue}`, () => {
          const pixel: Hsv = new Hsv({
            h: 20,
            s: .6,
            v: .6,
          });

          const result: Hsv = Operation.hue(hue)(pixel.toRgb()).toHsv();
          if (
            hue === 0 ||
            hue === 360
          ) {
            expect(result.h).equal(pixel.h);
          } else {
            expect(result.h).equal((360 + pixel.h + hue) % 361);
          }
        });
      });

    [100, 200, 300, 400, 500]
      .forEach(hue => {
        it('should NOT overflow with high value shift', () => {
          const pixel: Hsv = new Hsv({
            h: 200,
            s: .6,
            v: .6,
          });

          const result: Hsv = Operation.hue(hue)(pixel.toRgb()).toHsv();
          expect(result.h).equal((pixel.h + hue) % 361);
        });
      });
  });

  context('invert', () => {
    it('should invert color values', () => {
      const original = {
        r: 123,
        g: 100,
        b: 178,
      };

      const result: Rgb = Operation.invert()(new Rgb(original));

      expect(result.r).equal(255 - original.r);
      expect(result.g).equal(255 - original.g);
      expect(result.b).equal(255 - original.b);
    });
  });

  context('fill', () => {
    Object.keys(COLOR_MAP)
      .forEach(name => {
        const color = COLOR_MAP[name];
        it(`should correctly fill with '${name}'`, () => {
          const hex = color.hex;
          const [r, g, b] = hexToRgb(hex);
          const result: Rgb = Operation.fill(hex)();

          expect(result.r).equal(r);
          expect(result.g).equal(g);
          expect(result.b).equal(b);
        });
      });
  });
});