---
id: handling-events
title: การจัดการเหตุการณ์
permalink: docs/handling-events.html
prev: state-and-lifecycle.html
next: conditional-rendering.html
redirect_from:
  - "docs/events-ko-KR.html"
---

การจัดการเหตุการณ์ที่เกิดบน React elements นั้นมีความคล้ายคลึงกับการจัดการเหตุการณ์บน DOM elements มาก มีวิธีการเขียนที่ต่างกันเพียงเล็กน้อย

* เหตุการณ์ที่เกิดบน React นั้นตั้งชื่อด้วยแบบ camelCase แทนที่จะเป็นภาษาอังกฤษตัวพิมพ์เล็ก
* เราส่งค่าฟังก์ชั่นเข้ามาเป็นตัวจัดการเหตุการณ์ใน JSX เลย แทนที่จะเป็นเพียง string

ยกตัวอย่างเช่น ในกรณีที่เป็น HTML:

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

จะเห็นว่าแตกต่างจาก React เพียงเล็กน้อย

```js{1}
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

สิ่งที่แตกต่างอีกอย่างใน React คือเราไม่สามารถใช้การคืนค่า `false` ในการป้องกันสิ่งที่จะเกิดขึ้นหลังจากเหตุการณ์นั้น เราต้องเรียก `preventDefault` เลย ยกตัวอย่างเช่นถ้าต้องการจะป้องกันการเปิดหน้าใหม่หลังจากกดที่ลิงค์ ในกรณีที่เป็น HTML นั้นสามารถเขียนได้ในลักษณะนี้

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

ส่วนใน React นั้นสามารถเขียนได้ในลักษณะนี้

```js{2-5,8}
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

`e` ในที่นี้เป็นข้อมูลที่สังเคราะห์ขึ้นจากเหตุการณ์นั้น โดย React สร้างขึ้นมาตาม[ข้อกำหนดของ W3C](https://www.w3.org/TR/DOM-Level-3-Events/) ดังนั้นจึงไม่ต้องกังวลกับการรองรับการใช้งานในหลายบราว์เซอร์ ดูรายละเอียดเพิ่มเติมได้ที่ [`SyntheticEvent`](/docs/events.html) 

When using React you should generally not need to call `addEventListener` to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

When you define a component using an [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes), a common pattern is for an event handler to be a method on the class. For example, this `Toggle` component renders a button that lets the user toggle between "ON" and "OFF" states:

```js{6,7,10-14,18}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

[**Try it on CodePen**](https://codepen.io/gaearon/pen/xEmzGg?editors=0010)

You have to be careful about the meaning of `this` in JSX callbacks. In JavaScript, class methods are not [bound](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) by default. If you forget to bind `this.handleClick` and pass it to `onClick`, `this` will be `undefined` when the function is actually called.

This is not React-specific behavior; it is a part of [how functions work in JavaScript](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/). Generally, if you refer to a method without `()` after it, such as `onClick={this.handleClick}`, you should bind that method.

If calling `bind` annoys you, there are two ways you can get around this. If you are using the experimental [public class fields syntax](https://babeljs.io/docs/plugins/transform-class-properties/), you can use class fields to correctly bind callbacks:

```js{2-6}
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

This syntax is enabled by default in [Create React App](https://github.com/facebookincubator/create-react-app).

If you aren't using class fields syntax, you can use an [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) in the callback:

```js{7-9}
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```

The problem with this syntax is that a different callback is created each time the `LoggingButton` renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

## Passing Arguments to Event Handlers {#passing-arguments-to-event-handlers}

Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if `id` is the row ID, either of the following would work:

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

The above two lines are equivalent, and use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) respectively.

In both cases, the `e` argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with `bind` any further arguments are automatically forwarded.
