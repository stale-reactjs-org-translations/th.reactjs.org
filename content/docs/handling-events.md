---
id: handling-events
title: การจัดการเหตุการณ์
permalink: docs/handling-events.html
prev: state-and-lifecycle.html
next: conditional-rendering.html
redirect_from:
  - "docs/events-ko-KR.html"
---

<<<<<<< HEAD
การจัดการเหตุการณ์ที่เกิดบน React elements นั้นมีความคล้ายคลึงกับการจัดการเหตุการณ์บน DOM elements มาก มีเพียงไวยากรณ์ที่ต่างกันเล็กน้อย
=======
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
>>>>>>> 2ef0ee1e4fc4ce620dce1f3e0530471195dc64d1

* เหตุการณ์ที่เกิดบน React ใช้วิธีเขียนชื่อแบบ camelCase แทนที่จะเป็นภาษาอังกฤษตัวพิมพ์เล็ก
* เราส่งฟังก์ชั่นเข้ามาเป็นตัวจัดการเหตุการณ์ใน JSX เลย แทนที่จะเป็น string

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

<<<<<<< HEAD
สิ่งที่แตกต่างอีกอย่างใน React คือเราไม่สามารถใช้การคืนค่า `false` ในการป้องกันสิ่งที่จะเกิดขึ้นหลังจากเหตุการณ์นั้น เราต้องเรียก `preventDefault` เอง ยกตัวอย่างเช่นถ้าต้องการจะป้องกันการเปิดหน้าใหม่หลังจากที่กดลิงค์ ในกรณีที่เป็น HTML นั้นสามารถเขียนได้ในลักษณะนี้
=======
Another difference is that you cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly. For example, with plain HTML, to prevent the default form behavior of submitting, you can write:
>>>>>>> 78f78a664fcfaa2e5d9650d9662a67a8ab028661

```html
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

ส่วนใน React นั้นจะเขียนแบบนี้

```js{3}
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

<<<<<<< HEAD
โดย `e` ในที่นี้เป็นข้อมูลที่สังเคราะห์ขึ้นจากเหตุการณ์นั้น ซึ่ง React สร้างขึ้นมาตาม[ข้อกำหนดของ W3C](https://www.w3.org/TR/DOM-Level-3-Events/) ดังนั้นจึงไม่ต้องกังวลกับการรองรับการใช้งานในหลายบราว์เซอร์ ดูรายละเอียดเพิ่มเ
=======
Here, `e` is a synthetic event. React defines these synthetic events according to the [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/), so you don't need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the [`SyntheticEvent`](/docs/events.html) reference guide to learn more.
>>>>>>> 78f78a664fcfaa2e5d9650d9662a67a8ab028661

ในการเขียน React นั้น มักจะไม่จำเป็นที่ต้องเรียก `addEventListener` เพื่อเพิ่มข้อมูลการรับฟัง (listener) บน DOM element หลังจากที่มันถูกสร้าง เราเพียงแค่ให้ข้อมูลการรับฟัง(listener) เมื่อ element นั้นถูกนำไปแสดงผลในครั้งแรก

เมื่อเขียนคอมโพเนนท์ขึ้นมาด้วย [คลาส ES6](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) ตัวจัดการเหตุการณ์โดยทั่วไปนั้นคือ method ของคลาส ยกตัวอย่างเช่นคอมโพเนนท์ `Toggle` ที่มีการแสดงสถานะ "เปิด" (ON) และ "ปิด" (OFF) โดยผู้ใช้สามารถสลับค่าไปมาได้

```js{6,7,10-14,18}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // การ bind นี้เป็นสิ่งที่จำเป็นและทำให้ `this` ใช้งานได้ใน callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
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

[**ทดลองเขียนบน CodePen**](https://codepen.io/gaearon/pen/xEmzGg?editors=0010)

เราควรจะต้องระมัดระวังในค่า `this` ที่มากับ callback ของ JSX โดยในคลาส JavaScript นั้น method จะยังไม่ได้ถูก [bind](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) มาให้ ดังนั้นถ้าเราลืม bind `this.handleClick` แล้วส่งมันเข้าไปใน `onClick` เมื่อฟังก์ชันนี้ถูกเรียก ค่าของ `this` ในที่นี้จะกลายเป็น `undefined` ทันที

นี้ไม่ใช่สิ่งที่พบเจอได้แค่ใน React แต่มันเป็น[วิธีการทำงานของฟังก์ชั่น JavaScritp](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/) ทั่วไป นั้นคือโดยทั่วไปแล้วถ้าเราอ้างถึงฟังก์ชั่นโดยที่ไม่มี `()` ต่อท้ายเช่น `onClick={this.handleClick}` เราควร bind method นั้น

ถ้าการเรียก `bind` นั้นดูไม่น่าใช้ ยังมีอีกสองวิธีที่สามารถทำได้ โดยใช้ [ไวยากรณ์ class fields](https://babeljs.io/docs/plugins/transform-class-properties/) ที่ยังอยู่ในช่วงทดลองนั้นจัดการ bind ให้กับ callback

```js{2-6}
class LoggingButton extends React.Component {
  // ไวยากรณ์แบบนี้จะให้ทำให้ `this` นั้นถูก bind ภายใน handleClick
  // ระวัง: ไวยากรณ์แบบนี้ยังอยู่ในช่วง *ทดลอง*
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

ไวยากรณ์ในรูปแบบนี้เปิดให้ใช้งานเป็นค่าเริ่มต้นแล้วใน [Create React App](https://github.com/facebookincubator/create-react-app) 

แต่ถ้าไม่ได้ใช้ไวยากรณ์ class fields เราก็สามารถใช้[ฟังก์ชั่นแบบลูกศร](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ใน callback ได้

```js{7-9}
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // ไวยากรณ์แบบนี้จะให้ทำให้ `this` นั้นถูก bind ภายใน handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

ปัญหาของการเขียนแบบนี้คือจะมีการสร้าง callback ใหม่ทุกครั้งที่มีการแสดงผล `LogginButton` ซึ่งโดยทั่วไปแล้วสามารถทำได้ แต่ถ้า callback นี้ถูกส่งเข้าเป็น prop ของคอมโพเนนท์ที่อยู่ภายในอีก อาจจะส่งผลให้คอมโพเนนท์เหล่านั้นมีการสร้างการแสดงผลใหม่อย่างไม่จำเป็น เราจึงแนะนำให้ทำการ bind ที่ส่วน constructor หรือใช้ไวยากรณ์ class fields เพื่อหลีกเลี่ยงปัญหาด้านประสิทธิภาพ

## การส่งค่าเข้าไปยังการจัดการเหตุการณ์ {#passing-arguments-to-event-handlers}

ภายใน Loop เรามักจะต้องการพารามิเตอร์ที่เพิ่มขึ้นในการจัดการเหตุการณ์ ยกตัวอย่างเช่นถ้า `id` เป็นค่าเฉพาะของแต่ละแถว(ID) หรือไม่ตัวอย่างข้างล่างนี้ควรจะทำงานได้

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

การเขียนทั้งสองบรรทัดบนนั้นเหมือนกัน โดยใช้[ฟังก์ชั่นแบบลูกศร](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) และ [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) ตามลำดับ

โดยทั้งสองแบบนั้นจะได้รับ `e` ซึ่งเป็นข้อมูลเหตุการณ์ของ React โดยมันจะถูกส่งเข้าไปลำดับที่สองต่อจาก ID ถ้าเขียนแบบฟังก์ชั่นลูกศร เราต้องเขียน `e` ลงไปเองให้ชัดเจนเลย แต่ในแบบ `bind` ค่าของ `e` นั้นจะถูกส่งต่อเข้าไปเองโดยอัตโนมัติ
