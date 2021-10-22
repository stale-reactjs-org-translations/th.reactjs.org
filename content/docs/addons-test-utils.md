---
id: test-utils
title: Test Utilities
permalink: docs/test-utils.html
layout: docs
category: Reference
---

**ใช้งาน ReactTestUtils**

```javascript
import ReactTestUtils from 'react-dom/test-utils'; // ES6
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm
```

## การอธิบายโดยสรุป {#overview}

ในการเทส React components โดยใช้การใช้ testing framework `ReactTestUtils`จะมาทำให้การเทสนั้นๆสะดวกขึ้น. ที่ Facebook เราใช้ [Jest](https://facebook.github.io/jest/) สำหรับการเทส JavaScript. เรียนรู้การเขียนเทสโดยใช้Jest ผ่านทาง เว็บไซต์Jest[React Tutorial](https://jestjs.io/docs/tutorial-react).

> หมายเหตุ:
>
> เราแนะนำให้ใช้ [React Testing Library](https://testing-library.com/react) ซึ่งเป็นไลบรารี่ที่ออกแบบมาเพื่อให้ใช้งานและสนับสนุนการเขียนเทสเพื่อทดสอบ components
> สำหรับ React เวอร์ชั่น 16 ไลบรารี่ [Enzyme](https://airbnb.io/enzyme/) ใช้งานง่ายต่อการตรวจสอบ จัดการ หรือ สำรวจ React Components' output ของคุณ.

 - [`act()`](#act)
 - [`mockComponent()`](#mockcomponent)
 - [`isElement()`](#iselement)
 - [`isElementOfType()`](#iselementoftype)
 - [`isDOMComponent()`](#isdomcomponent)
 - [`isCompositeComponent()`](#iscompositecomponent)
 - [`isCompositeComponentWithType()`](#iscompositecomponentwithtype)
 - [`findAllInRenderedTree()`](#findallinrenderedtree)
 - [`scryRenderedDOMComponentsWithClass()`](#scryrendereddomcomponentswithclass)
 - [`findRenderedDOMComponentWithClass()`](#findrendereddomcomponentwithclass)
 - [`scryRenderedDOMComponentsWithTag()`](#scryrendereddomcomponentswithtag)
 - [`findRenderedDOMComponentWithTag()`](#findrendereddomcomponentwithtag)
 - [`scryRenderedComponentsWithType()`](#scryrenderedcomponentswithtype)
 - [`findRenderedComponentWithType()`](#findrenderedcomponentwithtype)
 - [`renderIntoDocument()`](#renderintodocument)
 - [`Simulate`](#simulate)

## อ้างอิง {#reference}

### `act()` {#act}

ใช้เพื่อการเตรียม component ก่อนที่จะทำการ assertion(การตรวจสอบ), นำโค้ดไปครอบไว้ด้วย `act()` จากนั้นเมื่อมีการ render หรือการอัปเดทเกิดขึ้นจะเกิดขึ้นภายใน `act()` call. ซึ่งการเทสแบบนี้จะเป็นการจำลองการทำงานของ React บนเว็บบราวเซอร์

>หมายเหตุ
>
>หากคุณใช้ `react-test-renderer`, ก็จะสามารถให้ `act` export ซึ่งลักษณะการทำงานเหมือนกัน

ตัวอย่างเช่น, กำหนดให้มี  `Counter` component:

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}
```

วิธีที่เราจะเทส component นี้ด้วย `act`:

```js{3,20-22,29-31}
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');

  // Test second render and componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});
```

- อย่างลืมว่า dispatching DOM events จะทำงานก็ต่อเมื่อ DOM container นั้นถูกใส่ไว้ใน `document`. ซึ่งคุณจะสามารถใช้ไลบรารี่ เช่น [React Testing Library](https://testing-library.com/react) เพื่อลด boilerplate code ลงได้.

- ข้อมูลอื่นๆเพิ่มเติมเกี่ยวกับ `act` จำพวก behave พร้อมตัวอย่างและการใช้งานสามารถอ่านเพิ่มเติมได้จาก [`recipes`](/docs/testing-recipes.html) 
* * *

### `mockComponent()` {#mockcomponent}

```javascript
mockComponent(
  componentClass,
  [mockTagName]
)
```

ใส่โมดูลของ component เข้าไปใน method นี้เพื่อทำให้เกิดเป็น component ซึ่งจะมาแทนที่การ render componet แบบปกติ การเรียก component จะเหลือเพียง `<div>` (หรือ tag อื่นๆหากมีการกำหนด `mockTagName`) รวมไปถึง children component เช่นกัน

> หมายเหตุ:
>
> `mockComponent()` เป็น legacy API. ดังนั้นเราจึงแนะนำ[`jest.mock()`](https://facebook.github.io/jest/docs/en/tutorial-react-native.html#mock-native-modules-using-jestmock) ดีกว่า

* * *

### `isElement()` {#iselement}

```javascript
isElement(element)
```

คืนค่า `true` หาก `element` นั้นเป็น React element.

* * *

### `isElementOfType()` {#iselementoftype}

```javascript
isElementOfType(
  element,
  componentClass
)
```

คืนค่า `true` หาก `element` นั้นเป็น React element และเป็นชนิด `componentClass`.

* * *

### `isDOMComponent()` {#isdomcomponent}

```javascript
isDOMComponent(instance)
```

คืนค่า `true` หาก `instance` เป็น DOM component (เช่น `<div>` หรือ `<span>`).

* * *

### `isCompositeComponent()` {#iscompositecomponent}

```javascript
isCompositeComponent(instance)
```

คืนค่า `true` หาก `instance` เป็น user-defined component เช่น class หรือ function.

* * *

### `isCompositeComponentWithType()` {#iscompositecomponentwithtype}

```javascript
isCompositeComponentWithType(
  instance,
  componentClass
)
```

คืนค่า `true` หาก `instance` หากเป็น component ซึ่งชนิดของ componet นั้นคือ React `componentClass`.

* * *

### `findAllInRenderedTree()` {#findallinrenderedtree}

```javascript
findAllInRenderedTree(
  tree,
  test
)
```

ตรวจสอบ component ทั้งหมดใน `tree` และ รวบรวม component ที่ `test(component)` เป็น `true`. ฟังก์ชั่นนี้อาจหากใช้เดี่ยวๆอาจไม่ได้มีประโยชน์เท่าไหร่ ดังนั้นจึงใช้เป็นองค์ประกอบของ test utils อื่นๆ

* * *

### `scryRenderedDOMComponentsWithClass()` {#scryrendereddomcomponentswithclass}

```javascript
scryRenderedDOMComponentsWithClass(
  tree,
  className
)
```

ค้นหา DOM elements ของ components ใน rendered tree ซึ่ง DOM components class name ตรงกัน `className`.

* * *

### `findRenderedDOMComponentWithClass()` {#findrendereddomcomponentwithclass}

```javascript
findRenderedDOMComponentWithClass(
  tree,
  className
)
```

เหมือนกับ [`scryRenderedDOMComponentsWithClass()`](#scryrendereddomcomponentswithclass) แต่คาดหวังว่าจะค่าผลลัพธ์ที่ได้เพียงค่าเดียว และ คืนค่าเพียงค่านั้น หรือ throws exception ถ้าหากมีผลลัพธ์อื่นนอกเหนือจากผลลัพธ์นั้น

* * *

### `scryRenderedDOMComponentsWithTag()` {#scryrendereddomcomponentswithtag}

```javascript
scryRenderedDOMComponentsWithTag(
  tree,
  tagName
)
```

ค้นหา DOM elements ของ components ใน rendered tree ซึ่ง DOM components tag name matching ตรงกัน `tagName`.

* * *

### `findRenderedDOMComponentWithTag()` {#findrendereddomcomponentwithtag}

```javascript
findRenderedDOMComponentWithTag(
  tree,
  tagName
)
```

เหมือน [`scryRenderedDOMComponentsWithTag()`](#scryrendereddomcomponentswithtag) แต่คาดหวังว่าจะค่าผลลัพธ์ที่ได้เพียงค่าเดียว และ คืนค่าเพียงค่านั้น หรือ throws exception ถ้าหากมีผลลัพธ์อื่นนอกเหนือจากผลลัพธ์นั้น
* * *

### `scryRenderedComponentsWithType()` {#scryrenderedcomponentswithtype}

```javascript
scryRenderedComponentsWithType(
  tree,
  componentClass
)
```

ค้นหา instance ของ component ที่ เป็น `componentClass`.

* * *

### `findRenderedComponentWithType()` {#findrenderedcomponentwithtype}

```javascript
findRenderedComponentWithType(
  tree,
  componentClass
)
```

เหมือนกับ [`scryRenderedComponentsWithType()`](#scryrenderedcomponentswithtype) แต่คาดหวังว่าจะค่าผลลัพธ์ที่ได้เพียงค่าเดียว และ คืนค่าเพียงค่านั้น หรือ throws exception ถ้าหากมีผลลัพธ์อื่นนอกเหนือจากผลลัพธ์นั้น
***

### `renderIntoDocument()` {#renderintodocument}

```javascript
renderIntoDocument(element)
```

แสดง React element แบบ DOM node เดี่ยว ในรูปแบบ document. **ฟังก์ชั่นนี้ต้องมี DOM.** ฟังก์ชั่นนี้มีประสิทธิภาพเทียบได้เท่ากับ:

```js
const domContainer = document.createElement('div');
ReactDOM.render(element, domContainer);
```

> หมายเหตุ:
>
> คุณจะต้องมี `window`, `window.document` และ `window.document.createElement` ซึ่งใช้ได้แบบ globally  **ก่อนที่** คุณจะ import `React`. มิเช่นนั้น React จะคิดว่ามันไม่สามารถ access DOM แล้วจะทำให้ methods เช่น `setState` ใช้งานไม่ได้.

* * *

## Utilities อื่นๆ {#other-utilities}

### `Simulate` {#simulate}

```javascript
Simulate.{eventName}(
  element,
  [eventData]
)
```

Simulate เป็น dispatch event บน DOM node ซึ่มีค่า `eventData` event dataให้ใช้ได้.

`Simulate` มี method [สำหรับทุกeventในReact](/docs/events.html#supported-events).

**การกด element**

```javascript
// <button ref={(node) => this.button = node}>...</button>
const node = this.button;
ReactTestUtils.Simulate.click(node);
```

**การใส่ค่าเข้าไปใน input field แล้วกด ENTER.**

```javascript
// <input ref={(node) => this.textInput = node} />
const node = this.textInput;
node.value = 'giraffe';
ReactTestUtils.Simulate.change(node);
ReactTestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
```

> หมายเหตุ
>
> คุณจะต้องกำหนด event property ที่คุณจะใช้ในแต่ละ component เอง (e.g. keyCode, which, etc...) ซึ่ง React ไม่ได้กำหนดให้.

* * *
