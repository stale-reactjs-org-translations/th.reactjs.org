---
id: forms
title: ฟอร์ม
permalink: docs/forms.html
prev: lists-and-keys.html
next: lifting-state-up.html
redirect_from:
  - "tips/controlled-input-null-value.html"
  - "docs/forms-zh-CN.html"
---

HTML element ประเภท ฟอร์ม (form) จะทำงานแตกต่างจาก DOM element ประเภทอื่นๆ ใน React เล็กน้อย เนื่องจากโดยปกติ element ประเภทฟอร์ม จะมีการเก็บ state ไว้เป็นของตัวเองอยู่แล้ว (ไม่เกี่ยวกับ state ของ React) ดังตัวอย่างด้านล่างที่เป็นแบบฟอร์ม HTML ทั่วไปที่รับข้อมูลเพียงหนึ่งอย่างคือ ชื่อ

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

ตัวอย่างฟอร์มด้านบนนี้จะมีความสามารถเหมือนกับ HTML ฟอร์มทั่วไป ที่จะเปลี่ยนบราวเซอร์ไปหน้าเพจใหม่เมื่อผู้ใช้งานกดปุ่ม submit หากคุณต้องการให้ฟอร์มของคุณมีการทำงานแบบนี้ใน React คุณไม่จำเป็นต้องทำอะไรเพิ่มจากนี้เลย แต่โดยส่วนใหญ่แล้ว การจัดการเกี่ยวกับฟอร์มจะทำได้ง่ายและสะดวกมากกว่า หากสามารถใช้ฟังก์ชัน JavaScript ที่สามารถเข้าถึงข้อมูลที่ผู้ใช้งานได้กรอกผ่านฟอร์มนั้น ๆ ในการควบคุมการส่งฟอร์ม วิธีมาตรฐานที่จะสามารถทำสิ่งที่กล่าวมานี้ได้ คือใช้เทคนิคที่เรียกว่า "คอนโทรลคอมโพเนนท์" (controlled components)

## คอนโทรลคอมโพเนนท์ {#controlled-components}

ในภาษา HTML, element ประเภทฟอร์ม ตัวอย่างเช่น `<input>`, `<textarea>`, และ `<select>` จะมีการจัดการเก็บ state ของตัวเองและอัพเดทเมื่อผู้ใช้งานกรอกข้อมูลเพิ่ม. สำหรับ React, state จะถูกเก็บไว้ในคอมโพเนนท์ และสามารถอัพเดทได้เพียงวิธีเดียว นั่นคือการเรียกฟังก์ชัน [`setState()`](/docs/react-component.html#setstate).

เราสามารถรวม 2 สิ่งนี้เข้าด้วยกันโดยใช้ state ของ React ในการเก็บข้อมูลอินพุทของผู้ใช้ หรือที่เรียกว่า "ความจริงเพียงหนึ่งเดียว" (single source of truth) จากนั้น คอมโพเนนท์ React ที่เรนเดอร์ฟอร์มนี้ ก็จะควบคุมสิ่งที่เกิดขึ้นกับฟอร์มนั้นเมื่อผู้ใช้งานกรอกข้อมูลเพิ่มเติมด้วย. Element ประเภทฟอร์มที่ข้อมูลอินพุทจากผู้ใช้ถูกควบคุมด้วย React นี้เรียกว่า "คอนโทรลคอมโพเนนท์" (controlled component)

ตัวอย่างเช่น หากเราต้องการให้ตัวอย่างฟอร์มที่ถูกกล่าวถึงก่อนหน้านี้ log ข้อมูลชื่อที่ผู้ใช้กรอกเข้ามา เมื่อกดปุ่ม submit เราสามารถเขียนฟอร์มเป็นคอนโทรลคอมโพเนนท์ได้ดังนี้

```javascript{4,10-12,21,24}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/VmmPgp?editors=0010)

เนื่องจากเราได้ใส่แอตทริบิวต์ `value` ไปให้กับ element ของฟอร์ม, ค่าที่จะถูกแสดงบนหน้าจอจะเป็นค่า `this.state.value` เสมอ ทำให้ state ของ React มีสถานะเป็น "ความจริงเพียงหนึ่งเดียว" (single source of truth) และฟังก์ชัน `handleChange` จะถูกรันทุกครั้งเมื่อมีอินพุทใหม่เข้ามา ทำให้ค่าที่ถูกแสดงบนหน้าจอจะอัพเดททุกครั้งที่ผู้ใช้พิมพ์

เมื่อเราใช้คอนโทรลคอมโพเนนท์, ทุก ๆ ค่าของ state ที่จะมีการเปลี่ยนแปลง จะมีฟังก์ชันสำหรับควบคุมการเปลี่ยนแปลงควบคู่ไปด้วยเสมอ จึงทำให้การแก้ไขหรือว่าตรวจสอบอินพุทของผู้ใช้เป็นไปได้อย่างง่ายดาย ตัวอย่างเช่น หากเราต้องการให้ชื่อที่ผู้ใช้กรอกเข้ามาเป็นตัวอักษรพิมพ์ใหญ่เสมอ เราสามารถทำได้ด้วยการเขียนฟังก์ชัน `handleChange` ดังนี้:

```javascript{2}
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()});
}
```

## Tag ประเภท textarea  {#the-textarea-tag}

สำหรับภาษา HTML, element ประเภท `<textarea>` จะแสดงข้อความตัวอักษรตามค่าที่เป็นลูกของมัน ดังนี้

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

ใน React, `<textarea>` จะแสดงข้อความจากแอตทริบิวต์ `value` แทน ดังนั้น ฟอร์มที่ใช้ `<textarea>` จะสามารถเขียนได้เหมือนกับการเขียนฟอร์มที่ใช้ input บรรทัดเดียวทั่วไป ดังนี้

```javascript{4-6,12-14,26}
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

สังเกตว่า `this.state.value` จะถูกตั้งค่าเริ่มต้นไว้เพื่อที่ textarea จะได้เริ่มต้นโดยที่มีข้อความบางอย่างแสดงอยู่ตั้งแต่แรก

## Tag ประเภท select {#the-select-tag}

ในภาษา HTML, `<select>` จะแสดง drop-down ลิสต์ ตัวอย่างเช่น HTML ด้านล่างนี้จะแสดง drop-down ลิสต์สำหรับเลือกรสชาติ

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

สังเกตว่าตัวเลือก Coconut ได้ถูกเลือกไว้เป็นค่าตั้งต้นผ่านแอตทริบิวต์ selected. สำหรับ React, แทนที่เราจะใช้แอตทริบิวต์ `selected` ใส่ไว้ให้กับ element `option` ที่เราอยากจะเลือก, เราจะใช้แอตทริบิวต์ `value` ใส่ให้กับแท็ก `select` ซึ่งเป็น element แม่แทน ซึ่งวิธีนี้จะทำให้เราใช้งานคอนโทรลคอมโพเนนท์ได้สะดวกมากกว่า เนื่องจากเราจำเป็นต้องเก็บและอัพเดทค่าที่เราเลือกเพียงที่เดียว (แทนที่จะต้องเก็บค่า selected ตามจำนวน option) ดังตัวอย่าง: 

```javascript{4,10-12,24}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/JbbEzX?editors=0010)

โดยภาพรวม `<input type="text">`, `<textarea>` และ `<select>` จะทำงานเหมือนกันทั้งหมด นั่นคือ ทุก element จะรับค่าแอตทริบิวต์ `value` ไปเพื่อที่เราสามารถทำให้เป็นคอนโทรลคอมโพเนนท์ได้

> หมายเหตุ
>
> เราสามารถใส่ค่าแอตทริบิวต์ `value` เป็นอาร์เรย์ได้ โดยจะทำให้เราสามารถเลือกตัวเลือกหลาย ๆ ตัวเลือกใน `select` ได้พร้อม ๆ กัน:
>
>```js
><select multiple={true} value={['B', 'C']}>
>```

## Tag ประเภท file input {#the-file-input-tag}

ในภาษา HTML, element ประเภท `<input type="file">` ช่วยให้ผู้ใช้เลือกไฟล์จากเครื่องของผู้ใช้เพื่อทำการอัพโหลดหรือส่งมาจัดการด้วย JavaScript โดยใช้ [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)

```html
<input type="file" />
```

เนื่องจากค่า value ของอินพุท ประเภท file เป็นแบบที่ห้ามแก้ไข (read-only) ทำให้มันเป็นคอมโพเนนท์ที่**ไม่สามารถควบคุมได้** (**uncontrolled** component) ใน React ซึ่งจะถูกพูดถึง [หลังจากนี้](/docs/uncontrolled-components.html#the-file-input-tag)

## การจัดการอินพุทหลาย ๆ ค่า {#handling-multiple-inputs}

เมื่อเราต้องการจัดการหลาย ๆ `input`, เราสามารถใส่แอตทริบิวต์ `name` ให้กับแต่ละ element และสร้างฟังก์ชันขึ้นมาจัดการแต่ละค่าตามแบบที่เราต้องการได้ โดยดูจากค่าของ `event.target.name`


ตัวอย่างเช่น:

```javascript{15,18,28,37}
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/wgedvV?editors=0010)

สังเกตว่าเราได้ใช้วิธีการเขียนแบบ [ชื่อคุณสมบัติจากการคำนวณ (computed property name)](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) ของ ES6 ในการอัพเดท key ของ state ที่ตรงกับค่า name ของอินพุท

```js{2}
this.setState({
  [name]: value
});
```

ซึ่งจะเหมือนกับการเขียนแบบนี้ใน ES5

```js{2}
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

นอกจากนี้ เนื่องจาก `setState()` จะทำการ [รวมค่าของ state ที่ถูกอัพเดทเพียงบางส่วนเข้ากับ state ทั้งหมด](/docs/state-and-lifecycle.html#state-updates-are-merged) โดยอัตโนมัติ เราจึงสามารถเรียกอัพเดท state เฉพาะแค่ค่าที่เปลี่ยนก็เพียงพอ

## ค่า null ของอินพุทที่ถูกควบคุม {#controlled-input-null-value}

<<<<<<< HEAD
การระบุค่า value ที่เฉพาะเจาะจงให้กับ [คอนโทรลคอมโพเนนท์](/docs/forms.html#controlled-components) จะทำให้ผู้ใช้ไม่สามารถเปลี่ยนค่าอินพุทได้นอกจากว่าเราต้องการให้เปลี่ยน หากคุณพบว่าคุณได้ใส่ค่าที่เฉพาะเจาะจงให้กับ `value` แต่อินพุทกลับยังสามารถถูกแก้ไขได้ อาจเป็นเพราะว่าคุณได้ตั้งค่าของ `value` ให้เป็น `undefined` หรือ `null` โดยไม่ได้ตั้งใจ
=======
Specifying the `value` prop on a [controlled component](/docs/forms.html#controlled-components) prevents the user from changing the input unless you desire so. If you've specified a `value` but the input is still editable, you may have accidentally set `value` to `undefined` or `null`.
>>>>>>> df2673d1b6ec0cc6657fd58690bbf30fa1e6e0e6

โค้ดด้านล่างเป็นตัวอย่างของการที่ตอนแรกผู้ใช้ไม่สามารถแก้ไขอินพุทได้ในตอนแรก และเปลี่ยนเป็นสามารถแก้ไขได้เมื่อเวลาผ่านไปเล็กน้อย
The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

```javascript
ReactDOM.createRoot(mountNode).render(<input value="hi" />);

setTimeout(function() {
  ReactDOM.createRoot(mountNode).render(<input value={null} />);
}, 1000);

```

## ตัวเลือกอื่นนอกจากคอนโทรลคอมโพเนนท์ {#alternatives-to-controlled-components}

การใช้คอนโทรลคอมโพเนนท์บางครั้งอาจเป็นเรื่องที่ดูวุ่นวาย เนื่องจากเราต้องมาเขียนฟังก์ชันการจัดการ event สำหรับทุก ๆ วิธีที่จะทำให้ข้อมูลของเราเปลี่ยนแปลงได้ และยังต้องทำการเชื่อมทุก ๆ state ของ element input เข้ากับ state ของ React ซึ่งบางทีอาจเป็นเรื่องวุ่นวายมากเกินไปหากเราต้องมาเปลี่ยนแปลงโค้ดเก่าที่เคยมีอยู่แล้วมาเป็น React, หรือหากเราต้องการใช้ React คู่กับไลบรารีอื่น ๆ ที่ไม่ได้เขียนแบบ React. หากคุณตกอยู่ในสถานการณ์เช่นนี้ การใช้ [คอมโพเนนท์ที่ไม่ถูกควบคุม (uncontrolled components)](/docs/uncontrolled-components.html) ซึ่งเป็นอีกวิธีหนึ่งสำหรับการทำแบบฟอร์มอินพุท อาจเหมาะสมกับคุณมากกว่า


## วิธีการสำเร็จรูป {#fully-fledged-solutions}

หากคุณต้องการวิธีการทำฟอร์มที่สำเร็จรูป ซึ่งรวมถึงการตรวจสอบอินพุท (validation), คอยนับและเช็คฟีลด์ที่ถูกเข้าถึง และควบคุมการส่งแบบฟอร์ม, [Formik](https://jaredpalmer.com/formik) ถือเป็นหนึ่งในไลบรารีที่ได้รับความนิยมอย่างมากในการทำสิ่งนี้ อย่างไรก็ตาม หลาย ๆ ไลบรารีก็ถูกสร้างขึ้นมาจากหลักการของคอนโทรลคอมโพเนนท์และการจัดการ state ดังนั้นคุณไม่ควรมองข้ามการเรียนรู้สิ่งเหล่านี้ไป
