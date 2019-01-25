
Imgstry
=======

Development Notes
-----------------

If you get this error `Pre-built binaries not installable for canvas@X.X.X and node@Y.Y.Y` when running `npm i`, that means that the `canvas` package cannot find a prebuilt version compatible with the current `node` version. The required dependencies must be installed manually in order to install all packages:

```
    choco install -y python2 gtk-runtime microsoft-build-tools libjpeg-turbo
```

Documentation
-------------

## Index

### Modules

* [Operation](modules/operation.md)

### Enumerations

* [ColorSpace](enums/colorspace.md)

### Classes

* [Cmyk](classes/cmyk.md)
* [CubicInterpolationSet](classes/cubicinterpolationset.md)
* [CubicSpline](classes/cubicspline.md)
* [Hex](classes/hex.md)
* [Hsv](classes/hsv.md)
* [Imgstry](classes/imgstry.md)
* [ImgstryEditor](classes/imgstryeditor.md)
* [ImgstrySpline](classes/imgstryspline.md)
* [Kernel](classes/kernel.md)
* [Pixel](classes/pixel.md)
* [Point](classes/point.md)
* [Rgb](classes/rgb.md)
* [SplinePointSet](classes/splinepointset.md)
* [SplineProcessor](classes/splineprocessor.md)

### Interfaces

* [IColor](interfaces/icolor.md)
* [IDisposable](interfaces/idisposable.md)
* [IPoint](interfaces/ipoint.md)
* [IPointResult](interfaces/ipointresult.md)
* [ImgstryBrowserOptions](interfaces/imgstrybrowseroptions.md)
* [KernelIndex](interfaces/kernelindex.md)

### Functions

* [EdgeDetection](#edgedetection)
* [GaussianBlur](#gaussianblur)
* [clearCanvas](#clearcanvas)
* [drawCircle](#drawcircle)
* [drawGrid](#drawgrid)
* [drawImage](#drawimage)
* [fillCanvas](#fillcanvas)
* [fillWith](#fillwith)
* [findLastIndex](#findlastindex)
* [getCanvas](#getcanvas)
* [imageData](#imagedata)
* [loadImage](#loadimage)
* [splineTheme](#splinetheme)

---

## Functions

<a id="edgedetection"></a>

### `<Const>` EdgeDetection

▸ **EdgeDetection**(): `number`[][]

*Defined in [kernel/collection/edge-detect.kernel.ts:5](https://github.com/visual-cortex/imgstry/blob/master/source/kernel/collection/edge-detect.kernel.ts#L5)*

**Returns:** `number`[][]

___
<a id="gaussianblur"></a>

### `<Const>` GaussianBlur

▸ **GaussianBlur**(radius?: *`number`*, sigma?: *`number`*): `number`[][]

*Defined in [kernel/collection/gaussion.kernel.ts:8](https://github.com/visual-cortex/imgstry/blob/master/source/kernel/collection/gaussion.kernel.ts#L8)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` radius | `number` | 3 |
| `Default value` sigma | `number` | 1 |

**Returns:** `number`[][]

___
<a id="clearcanvas"></a>

### `<Const>` clearCanvas

▸ **clearCanvas**(canvas: *`HTMLCanvasElement`*): `void`

*Defined in [utils/canvas/clearCanvas.ts:7](https://github.com/visual-cortex/imgstry/blob/master/source/utils/canvas/clearCanvas.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| canvas | `HTMLCanvasElement` |

**Returns:** `void`

___
<a id="drawcircle"></a>

### `<Const>` drawCircle

▸ **drawCircle**(canvas: *`HTMLCanvasElement`*, options: *`ICircleOptions`*): `void`

*Defined in [utils/canvas/drawCircle.ts:16](https://github.com/visual-cortex/imgstry/blob/master/source/utils/canvas/drawCircle.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| canvas | `HTMLCanvasElement` |
| options | `ICircleOptions` |

**Returns:** `void`

___
<a id="drawgrid"></a>

### `<Const>` drawGrid

▸ **drawGrid**(canvas: *`HTMLCanvasElement`*, __namedParameters: *`object`*): `void`

*Defined in [utils/canvas/drawGrid.ts:14](https://github.com/visual-cortex/imgstry/blob/master/source/utils/canvas/drawGrid.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| canvas | `HTMLCanvasElement` |
| __namedParameters | `object` |

**Returns:** `void`

___
<a id="drawimage"></a>

### `<Const>` drawImage

▸ **drawImage**(canvas: *`HTMLCanvasElement`*, image: *`CanvasImageSource`*): `void`

*Defined in [utils/canvas/drawImage.ts:8](https://github.com/visual-cortex/imgstry/blob/master/source/utils/canvas/drawImage.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| canvas | `HTMLCanvasElement` |
| image | `CanvasImageSource` |

**Returns:** `void`

___
<a id="fillcanvas"></a>

### `<Const>` fillCanvas

▸ **fillCanvas**(canvas: *`HTMLCanvasElement`*, color: *`string`*): `void`

*Defined in [utils/canvas/fillCanvas.ts:8](https://github.com/visual-cortex/imgstry/blob/master/source/utils/canvas/fillCanvas.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| canvas | `HTMLCanvasElement` |
| color | `string` |

**Returns:** `void`

___
<a id="fillwith"></a>

###  fillWith

▸ **fillWith**(count: *`number`*, value: *`number`*): `any`[]

*Defined in [utils/array/fillWith.ts:9](https://github.com/visual-cortex/imgstry/blob/master/source/utils/array/fillWith.ts#L9)*

Creates an array and fills it with the specified value
*__export__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  the number of elements the array should contain |
| value | `number` |  the filler value |

**Returns:** `any`[]
the array with the requested value

___
<a id="findlastindex"></a>

###  findLastIndex

▸ **findLastIndex**<`T`>(arr: *`T`[]*, predicate: *`function`*): `number`

*Defined in [utils/array/findLastIndex.ts:10](https://github.com/visual-cortex/imgstry/blob/master/source/utils/array/findLastIndex.ts#L10)*

Retrieves the last index that resolves the predicate
*__export__*: 

*__template__*: T

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arr | `T`[] |  the source array |
| predicate | `function` |  the predicate with the logic |

**Returns:** `number`
the position of the found element, -1 if not found

___
<a id="getcanvas"></a>

### `<Const>` getCanvas

▸ **getCanvas**(selector: *`string` \| `HTMLCanvasElement`*): `HTMLCanvasElement`

*Defined in [utils/dom/getCanvas.ts:9](https://github.com/visual-cortex/imgstry/blob/master/source/utils/dom/getCanvas.ts#L9)*

Retrieves the canvas elemented for a specified 'id'.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| selector | `string` \| `HTMLCanvasElement` |  canvas id selector or the canvas element |

**Returns:** `HTMLCanvasElement`
the canvas element

___
<a id="imagedata"></a>

### `<Const>` imageData

▸ **imageData**(canvas: *`HTMLCanvasElement`*): `ImageData`

*Defined in [utils/canvas/imageData.ts:8](https://github.com/visual-cortex/imgstry/blob/master/source/utils/canvas/imageData.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| canvas | `HTMLCanvasElement` |

**Returns:** `ImageData`

___
<a id="loadimage"></a>

### `<Const>` loadImage

▸ **loadImage**(ImageCtor: *`ImageConstructor`*, src: *`string`*): `Promise`<`HTMLImageElement`>

*Defined in [utils/dom/loadImage.ts:12](https://github.com/visual-cortex/imgstry/blob/master/source/utils/dom/loadImage.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ImageCtor | `ImageConstructor` |
| src | `string` |

**Returns:** `Promise`<`HTMLImageElement`>

___
<a id="splinetheme"></a>

### `<Const>` splineTheme

▸ **splineTheme**(theme: *`Theme`*): `object`

*Defined in [platform/browser/spline/spline.theme.ts:3](https://github.com/visual-cortex/imgstry/blob/master/source/platform/browser/spline/spline.theme.ts#L3)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| theme | `Theme` |

**Returns:** `object`

___
