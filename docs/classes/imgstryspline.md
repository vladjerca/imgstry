[imgstry](../README.md) > [ImgstrySpline](../classes/imgstryspline.md)

# Class: ImgstrySpline

## Hierarchy

 [SplineProcessor](splineprocessor.md)

 [SplineProcessor](splineprocessor.md)

**↳ ImgstrySpline**

## Implements

* [IDisposable](../interfaces/idisposable.md)

## Index

### Constructors

* [constructor](imgstryspline.md#constructor)

### Properties

* [getCanvas](imgstryspline.md#getcanvas)

### Methods

* [add](imgstryspline.md#add)
* [dispose](imgstryspline.md#dispose)
* [interpolate](imgstryspline.md#interpolate)
* [interpolateOne](imgstryspline.md#interpolateone)
* [lookup](imgstryspline.md#lookup)
* [remove](imgstryspline.md#remove)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ImgstrySpline**(_canvas: *`HTMLCanvasElement`*, _options?: *`ISplineOptions`*): [ImgstrySpline](imgstryspline.md)

*Overrides [SplineProcessor](splineprocessor.md).[constructor](splineprocessor.md#constructor)*

*Defined in [platform/browser/spline/spline.browser.ts:74](https://github.com/visual-cortex/imgstry/blob/master/source/platform/browser/spline/spline.browser.ts#L74)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| _canvas | `HTMLCanvasElement` | - |
| `Default value` _options | `ISplineOptions` |  {} as ISplineOptions |

**Returns:** [ImgstrySpline](imgstryspline.md)

___

## Properties

<a id="getcanvas"></a>

### `<Static>` getCanvas

**● getCanvas**: *[getCanvas]()* =  getCanvas

*Defined in [platform/browser/spline/spline.browser.ts:42](https://github.com/visual-cortex/imgstry/blob/master/source/platform/browser/spline/spline.browser.ts#L42)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(point: *[IPoint](../interfaces/ipoint.md)*): `void`

*Overrides [SplineProcessor](splineprocessor.md).[add](splineprocessor.md#add)*

*Defined in [platform/browser/spline/spline.browser.ts:171](https://github.com/visual-cortex/imgstry/blob/master/source/platform/browser/spline/spline.browser.ts#L171)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| point | [IPoint](../interfaces/ipoint.md) |

**Returns:** `void`

___
<a id="dispose"></a>

###  dispose

▸ **dispose**(): `void`

*Implementation of [IDisposable](../interfaces/idisposable.md).[dispose](../interfaces/idisposable.md#dispose)*

*Defined in [platform/browser/spline/spline.browser.ts:185](https://github.com/visual-cortex/imgstry/blob/master/source/platform/browser/spline/spline.browser.ts#L185)*

**Returns:** `void`

___
<a id="interpolate"></a>

###  interpolate

▸ **interpolate**(predicate: *`function`*): `void`

*Inherited from [SplineProcessor](splineprocessor.md).[interpolate](splineprocessor.md#interpolate)*

*Overrides [SplineProcessor](splineprocessor.md).[interpolate](splineprocessor.md#interpolate)*

*Defined in [core/spline/spline.processor.ts:44](https://github.com/visual-cortex/imgstry/blob/master/source/core/spline/spline.processor.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |

**Returns:** `void`

___
<a id="interpolateone"></a>

###  interpolateOne

▸ **interpolateOne**(x: *`number`*): `number`

*Inherited from [SplineProcessor](splineprocessor.md).[interpolateOne](splineprocessor.md#interpolateone)*

*Overrides [SplineProcessor](splineprocessor.md).[interpolateOne](splineprocessor.md#interpolateone)*

*Defined in [core/spline/spline.processor.ts:53](https://github.com/visual-cortex/imgstry/blob/master/source/core/spline/spline.processor.ts#L53)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `number`

___
<a id="lookup"></a>

###  lookup

▸ **lookup**(): `number`[]

*Inherited from [SplineProcessor](splineprocessor.md).[lookup](splineprocessor.md#lookup)*

*Overrides [SplineProcessor](splineprocessor.md).[lookup](splineprocessor.md#lookup)*

*Defined in [core/spline/spline.processor.ts:33](https://github.com/visual-cortex/imgstry/blob/master/source/core/spline/spline.processor.ts#L33)*

**Returns:** `number`[]

___
<a id="remove"></a>

###  remove

▸ **remove**(point: *[IPoint](../interfaces/ipoint.md)*): `void`

*Overrides [SplineProcessor](splineprocessor.md).[remove](splineprocessor.md#remove)*

*Defined in [platform/browser/spline/spline.browser.ts:178](https://github.com/visual-cortex/imgstry/blob/master/source/platform/browser/spline/spline.browser.ts#L178)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| point | [IPoint](../interfaces/ipoint.md) |

**Returns:** `void`

___
