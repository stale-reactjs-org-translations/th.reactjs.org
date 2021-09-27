---
id: lifting-state-up
title: เลื่อนตำแหน่งของ State ขึ้น
permalink: docs/lifting-state-up.html
prev: forms.html
next: composition-vs-inheritance.html
redirect_from:
  - "docs/flux-overview.html"
  - "docs/flux-todo-list.html"
---

บ่อยครั้งที่คอมโพเนนท์หลาย ๆ คอมโพเนนท์จำเป็นที่จะต้องใช้ข้อมูลจากที่เดียวกัน เราแนะนำให้คุณเลื่อนตำแหน่งของ state ที่ถูกแชร์ขึ้นมาเก็บไว้ที่คอมโพเนนท์แม่ในใกล้ที่สุดของ 2 คอมโพเนนท์นั้น เราลองมาดูตัวอย่างโดยละเอียดข้างล่างกัน

สำหรับหัวข้อนี้ เราจะสร้างเครื่องคำนวณอุณหภูมิที่จะคำนวณว่าน้ำจะเดือดหรือไม่สำหรับค่าอุณหภูมิที่ผู้ใช้ป้อนให้

เราจะเริ่มจากคอมโพเนนท์ชื่อ `BoilingVerdict` คอมโพเนนท์นี้จะรับค่า prop คือ อุณหภูมิในหน่วย `เซลเซียส (celsius)` และแสดงคำตอบว่าอุณหภูมินี้เพียงพอกับการทำให้น้ำเดือดหรือไม่


```js{3,5}
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
```

ต่อไป เราจะสร้างคอมโพเนนท์ชื่อว่า `Calculator` ที่จะเรนเดอร์ช่อง `<input>` สำหรับให้ผู้ใช้กรอกข้อมูลอุณหภูมิ และเก็บค่าอุณหภูมินั้นไว้ใน `this.state.temperature`

นอกจากนั้น คอมโพเนนท์นี้ยังเรนเดอร์ `BoilingVerdict` ด้วยค่าอินพุทปัจจุบันด้วย

```js{5,9,13,17-21}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/ZXeOBm?editors=0010)

## ใส่อินพุทค่าที่สอง {#adding-a-second-input}

ต่อมาเราต้องการเพิ่มความสามารถให้กับเครื่องคำนวณของเรา โดยเราต้องการให้ผู้ใช้สามารถกรอกอุณหภูมิในหน่วย ฟาเรนไฮต์ (Fahrenheit) ได้ และเราต้องการให้ค่าอุณหภูมิทั้งสองหน่วยนี้เป็นค่าอุณหภูมิเดียวกันตลอดเวลา

เราสามารถทำได้โดยการแยกบางส่วนของคอมโพเนนท์ `Calculator` ออกมาเป็นคอมโพเนนท์ `TemperatureInput` และเราจะเพิ่ม prop `scale` ให้กับมันโดยค่า prop จะเป็นได้ 2 ค่าคือ `"c"` หรือ `"f"`

```js{1-4,19,22}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

เราสามารถเปลี่ยน `Calculator` ให้เรนเดอร์ช่องอินพุทอุณหภูมิ 2 ค่าแยกกันได้ ดังนี้:

```js{5,6}
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/jGBryx?editors=0010)

ตอนนี้เรามีค่าอินพุท 2 ค่าแล้ว แต่หากเราป้อนค่าอุณหภูมิเข้าไปให้กับค่าใดค่าหนึ่ง อีกค่าหนึ่งจะยังไม่ได้ถูกอัพเดท ซึ่งยังไม่ตรงกับความต้องการของเราที่ต้องการให้ค่าทั้ง 2 ค่านี้แสดงถึงอุณหภูมิเดียวกันเสมอ

นอกจากนี้ เรายังไม่สามารถแสดง `BoilingVerdict` ใน `Calculator` ได้ เนื่องจาก `Calculator` ไม่รู้ค่าอินพุทปัจจุบัน เพราะว่าค่านั้นถูกเก็บไว้ในคอมโพเนนท์ `TemperatureInput`

## เขียนฟังก์ชันสำหรับแปลงหน่วยอุณหภูมิ {#writing-conversion-functions}

อันดับแรก เราจะมาเขียนฟังก์ชัน 2 ฟังก์ชันสำหรับการแปลงอุณหภูมิจากเซลเซียสไปเป็นฟาเรนไฮต์และจากฟาเรนไฮต์กลับมาเป็นเซลเซียส

```js
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

ฟังก์ชัน 2 ฟังก์ชันนี้จะทำการแปลงตัวเลข ต่อไปเราจะเขียนฟังก์ชันที่รับตัวแปรสตริง `temperature` กับฟังก์ชันสำหรับแปลงค่าอุณหภูมิ และคืนค่าสตริง เราจะใช้ฟังก์ชันนี้สำหรับแปลงค่าอุณหภูมิอีกค่าหนึ่งจากค่าอุณหภูมิที่เป็นอินพุท

ฟังก์ชันนี้จะคืนค่าสตริงเปล่า (`''`) ในกรณีที่ค่า `temperature` ไม่ได้เป็นตัวเลข และคืนค่าเป็นค่าเอาท์พุทที่ถูกปัดหน่วยถึงทศนิยมหลักที่ 3

```js
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

ตัวอย่างเช่น `tryConvert('abc', toCelsius)` จะคืนค่าเป็นสตริงเปล่า และ `tryConvert('10.22', toFahrenheit)` จะคืนค่า `'50.396'`

## เลื่อนตำแหน่งของ State ขึ้น {#lifting-state-up}

ณ ตอนนี้ คอมโพเนนท์ `TemperatureInput` ทั้งสำหรับของเซลเซียสและฟาเรนไฮต์ได้เก็บค่าอินพุทไว้ใน state ของตัวเอง

```js{5,9,13}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    // ...  
```

อย่างไรก็ตาม เราต้องการให้อินพุททั้งสองค่าสัมพันธ์กันอยู่ตลอดเวลา อย่างเช่นเมื่อเราอัพเดทค่าอุณหภูมิเซลเซียส ค่าอุณหภูมิฟาเรนไฮต์ก็ควรจะถูกเปลี่ยนเป็นค่าที่สอดคล้องกับค่าอุณหภูมิเซลเซียส

ใน React การแชร์ state สามารถทำได้โดยการเลื่อนตำแหน่งสำหรับเก็บ state ขึ้นไปอยู่ในคอมโพเนนท์ที่เป็นแม่ที่ใกล้ที่สุดของทั้ง 2 คอมโพเนนท์ การทำแบบนี้เราเรียกว่า "เลื่อนตำแหน่ง state ขึ้น (lifting state up)" ต่อไปเราจะทำการลบค่า state ที่เก็บใน `TemperatureInput` ออกแล้วเปลี่ยนไปเก็บในคอมโพเนนท์ `Calculator` แทน

เมื่อ `Calculator` เป็นผู้เก็บ state ที่ถูกแชร์ มันจะถูกเรียกว่า "แหล่งข้อมูลความจริง (source of truth)" สำหรับค่าอุณหภูมิล่าสุดของทั้งสองคอมโนเนนท์อินพุท มันสามารถควบคุมให้ทั้งสองคอมโพเนนท์อินพุทแสดงค่าที่สอดคล้องกันได้ และเนื่องจาก prop ของคอมโพเนนท์ `TemperatureInput` ทั้ง 2 มาจากคอมโพเนนท์ `Calculator` ซึ่งเป็นคอมโพเนนท์แม่เหมือน ๆ กัน ค่าอุณหภูมิที่แสดงจึงเป็นค่าที่สอดคล้องกันเสมอ

ลองมาดูวิธีการทำทีละขั้นตอนกัน

อันดับแรก เราจะแทนค่า `this.state.temperature` ด้วย `this.props.temperature` ในคอมโพเนนท์ `TemperatureInput` โดยตอนนี้ ให้สมมุติก่อนว่าค่า `this.props.temperature` นั้นมีอยู่จริง ถึงแม้ว่าเราจะต้องส่งค่านี้มาจากคอมโพเนนท์ `Calculator` ในอนาคต

```js{3}
  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    // ...
```

เรารู้ว่า [ค่า props นั้นไม่สามารถแก้ไขได้ (read-only)](/docs/components-and-props.html#props-are-read-only) เมื่อครั้งตอนที่ `temperature` ถูกเก็บไว้เป็น state คอมโพเนนท์ `TemperatureInput` ยังสามารถเรียก `this.setState()` เพื่อแก้ไข้ค่าของมันได้ แต่อย่างไรก็ตาม ขณะนี้ `temperature` ถูกส่งเข้ามาในฐานะ prop จากคอมโพเนนท์แม่ `TemperatureInput` จึงไม่สามารถเปลี่ยนแปลงค่าของมันได้

ใน React เรามักจะสามารถแก้ไขเหตุการณ์นี้ได้โดยเปลี่ยนคอมโพเนนท์ให้เป็นคอมโพเนนท์ที่ "ถูกควบคุม (controlled)" เหมือนอย่างที่ DOM element `<input>` รับทั้งค่า `value` และค่าฟังก์ชัน `onChange` ไปเป็น prop เราก็สามารถทำให้คอมโพเนนท์ `TemperatureInput` รับที่ค่า `temperature` และฟังก์ชัน `onTemperatureChange` จากคอมโพเนนท์แม่ `Calculator` ไปเป็น prop ได้เช่นกัน

คราวนี้ เมื่อ `TemperatureInput` ต้องการจะอัพเดทค่าอุณหภูมิ มันก็แค่เรียกฟังก์ชัน `this.props.onTemperatureChange`:

```js{3}
  handleChange(e) {
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
    // ...
```

>หมายเหตุ
>
>React ไม่ได้เจาะจงว่าจะต้องตั้งชื่อ prop ว่า `temperature` หรือ `onTemperatureChange` สำหรับคอมโพเนนท์ที่เราสร้างขึ้นเอง เราสามารถใช้ชื่ออื่น ๆ ใด ๆ ก็ได้ ตัวอย่างเช่น `value` และ `onChange` ซึ่งเป็นชื่อที่คนส่วนใหญ่มักจะตั้ง

ค่า prop `onTemperatureChange` จะถูกส่งเข้ามาพร้อมกับ `temperature` จากคอมโพเนนท์ `Calculator` ซึ่งเป็นคอมโพเนนท์แม่ ซึ่งฟังก์ชันนี้จะจัดการการเปลี่ยนแปลงโดยการแก้ไขค่าใน state ของมันเอง และส่งผลให้เกิดการเรนเดอร์ใหม่อีกครั้ง คอมโพเนนท์อินพุททั้งสองใหม่อีกครั้งด้วยค่าอุณหภูมิใหม่ ซึ่งเราจะไปดูวิธีการเขียนคอมโพเนนท์ `Calculator` หลังจากนี้

แต่ก่อนที่จะไปดูการเปลี่ยนแปลงในคอมโพเนนท์ `Calculator` เรามาสรุปการเปลี่ยนแปลงของ `TemperatureInput` กันก่อน โดยเราได้ทำการลบ state ที่ถูกเก็บไว้ออก และแทนการอ่านค่าจาก `this.state.temperature` ด้วยค่าจาก `this.props.temperature` และแทนที่จะเรียกฟังกัน `this.setState()` เมื่อเราต้องการแก้ไขค่าอุณหภูมิ เราเปลี่ยนมาเรียกฟังก์ชัน `this.props.onTemperatureChange()` แทน ซึ่งค่าทั้งสองจะถูกส่งมาจากคอมโพเนนท์ `Calculator`

```js{8,12}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

ต่อไป เราจะมาดูในคอมโพเนนท์ `Calculator` กัน

เราจะเก็บค่าอินพุท `temperature` และค่า `scale` ไว้ใน state ของคอมโพเนนท์ ซึ่งนี่แหละคือค่า state ที่เรา "เลื่อนขึ้นมา (lifted up)" จากคอมโพเนนท์อินพุท และจะทำหน้าที่เป็น "แหล่งข้อมูลความจริง (source of truth)" สำหรับทั้งสองคอมโพเนนท์อินพุท ซึ่งค่าที่เก็บใน state นี้จะต้องเป็นค่าที่ซับซ้อนน้อยที่สุดแต่มีข้อมูลเพียงพอสำหรับนำไปแสดงเป็นค่าที่เราต้องการจะนำไปเรนเดอร์ในคอมโพเนนท์อินพุท

ตัวอย่างเช่น หากเราใส่ค่า 37 เข้าไปในอินพุทแบบเซลเซียส state ของ `Calculator` จะเป็นแบบนี้:

```js
{
  temperature: '37',
  scale: 'c'
}
```

ต่อไปหากเราแก้ไขอินพุทในช่องฟาเรนไฮต์เป็น 212 ค่า state ของ `Calculator` จะเป็นดังนี้:

```js
{
  temperature: '212',
  scale: 'f'
}
```

ความจริงเราสามารถเก็บค่าทั้งของเซลเซียสและฟาเรนไฮต์ไว้ใน state ได้ แต่คุณจะพบว่ามันเกินความจำเป็น เนื่องจากเพียงเก็บค่าของอินพุทล่าสุดที่ถูกแก้ไขพร้อมกับค่าหน่วยของค่านั้นก็เพียงพอแล้วสำหรับการแสดงผล เราสามารถคำนวณค่าของอินพุทอีกค่าหนึ่งได้จากค่า `temperature` และ `scale` ปัจจุบัน

ค่าของทั้งสองอินพุทจะสอดคล้องกันเสมอเนื่องจากค่าของพวกมันถูกคำนวณมาจาก state เดียวกัน

```js{6,10,14,18-21,27-28,31-32,34}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/WZpxpz?editors=0010)

ตอนนี้ ไม่ว่าผู้ใช้จะแก้อินพุทไหน ค่าของ `this.state.temperature` และ `this.state.scale` ใน `Calculator` จะถูกอัพเดท อินพุทหนึ่งจะเป็นค่าที่เป็นค่าที่ถูกเปลี่ยน (นั่นคือค่าที่ผู้ใช้เป็นผุ้กรอก) และอีกค่าหนึ่งจะเป็นค่าที่ถูกคำนวณจากค่านั้น

ต่อไปเรามาสรุปดูว่า เกิดอะไรขึ้นบ้างเมื่อผู้ใช้แก้ไขค่าอินพุท:

* React เรียกใช้ฟังก์ชันที่ถูกส่งให้กับแอตทริบิวต์ `onChange` ของ DOM `<input>` ในกรณีของเรา นี่คือฟังก์ชัน `handleChange` ในคอมโพเนนท์ `TemperatureInput`
* ฟังก์ชัน `handleChange` ใน `TemperatureInput` เรียกฟังก์ชัน `this.props.onTemperatureChange()` ด้วยค่าอินพุทใหม่ที่ถูกเปลี่ยน ค่า prop ของคอมโพเนนท์นี้ซึ่งรวมถึง `onTemperatureChange` จะถูกส่งมาจากคอมโพเนนท์แม่คือ `Calculator`
* ตอนที่คอมโพเนนท์ `Calculator` ถูกเรนเดอร์ค่าของ `onTemperatureChange` ที่ส่งให้กับ `TemperatureInput` ประเภทเซลเซียส คือฟังก์ชัน `handleCelsiusChange` ของ `Calculator` และค่า `onTemperatureChange` ที่ส่งให้กับ `TemperatureInput` ประเภทฟาเรนไฮต์ก็คือฟังก์ชัน `handleFahrenheitChange` ซึ่งฟังก์ชันไหนของ `Calculator` ที่จะถูกเรียกนั้นขึ้นอยู่กับว่าอินพุทประเภทใดถูกแก้ไข
* ในฟังก์ชันเหล่านี้ คอมโพเนนท์ `Calculator` ได้ขอให้ React เรนเดอร์ตัวของมันเองใหม่อีกครั้ง โดยการเรียกฟังก์ชัน `this.setState()` ด้วยค่าอินพุทใหม่และค่าที่หน่วย (scale) ของอินพุทที่เราพึ่งแก้ไข
* React เรียกฟังก์ชัน `render` ของคอมโพเนนท์ `Calculator` เพื่อดูว่า UI ควรมีหน้าตาเป็นอย่างไร ค่าของอินพุททั้งสองจะถูกคำนวณใหม่อีกครั้งจากค่าอุณหภูมิและค่าหน่วยที่ถูกเก็บไว้ล่าสุด การแปลงอุณหภูมิจะเกิดในขั้นตอนนี้
* React เรียกฟังก์ชัน `render` ของแต่ละคอมโพเนนท์ `TemperatureInput` อีกครั้งด้วยค่า prop ใหม่ที่ถูกส่งมาจาก `Calculator` มันตรวจสอบดูว่า UI ควรมีหน้าตาเป็นอย่างไร
* React เรียกฟังก์ชัน `render` ของคอมโพเนนท์ `BoilingVerdict` และส่งค่าอุณหภูมิในหน่วยเซลเซียสไปเป็น prop ของคอมโพเนนท์
* React DOM อัพเดท DOM ด้วยค่าที่บอกว่าน้ำเดือดหรือไม่จากค่าอินพุทใหม่ ค่าอินพุทที่ถูกแก้ไขได้รับค่าซึ่งเป็นค่าปัจจุบัน ส่วนอินพุทของอุณหภูมิอีกประเภทหนึ่งจูกอัพเดทจากค่าที่ถูกแปลงหน่วยแล้ว
 
ทุก ๆ การอัพเดทเกิดขึ้นในขั้นตอนตามนี้ อินพุททั้งสองจึงสอดคล้องกันอยู่ตลอดเวลา

## บทเรียนที่ได้รับ {#lessons-learned}

การเปลี่ยนแปลงของข้อมูลในแอพลิเคชัน React ควรจะมีสิ่งที่เรียกว่า "แหล่งข้อมูลความจริง (source of truth)" เสมอ โดยทั่วไป ในตอนแรก state จะถูกเก็บไว้ในคอมโพเนนท์ที่ต้องการใช้ในการเรนเดอร์ จากนั้นหากมีคอมโพเนนท์อื่นที่ต้องการใช้ข้อมูลนั้นเหมือนกัน คุณสามารถเลื่อนตำแหน่งของ state ขึ้นมาเก็บไว้กับคอมโพเนนท์บรรพบุรุษที่ใกล้ที่สุดของสองคอมโพเนนท์นั้น นั่นคือ แทนที่จะพยายามทำให้ state ของสองคอมโพเนนท์มีค่าเดียวกัน คุณควรใช้หลักการ [การไหลของข้อมูลจากบนลงล่าง (top-down data flow)](/docs/state-and-lifecycle.html#the-data-flows-down)

การเลื่อนระดับของ state ต้องอาศัยการเขียนโค้ดที่มีความ "สำเร็จรูป" (boilerplate code) มากกว่าวิธีการผูกข้อมูลสองด้าน (two-way binding) แต่ประโยชน์ที่เราจะได้รับคือมันจะง่ายในการหาบั๊กมากกว่า เนื่องจากว่า state จะถูกเก็บอยู่ในคอมโพเนนท์นั้นคอมโพเนนท์เดียว และมีเพียงคอมโพเนนท์นั้นคอมโพเนนท์เดียวที่สามารถแก้ไขค่าของ state ได้ ทำให้จุดที่อาจจะทำให้เกิดบั๊กลดลงอย่างมาก นอกจากนี้คุณยังสามารถเขียนลอจิคพิเศษสำหรับจัดการไม่รับหรือแปลงรูปอินพุทของผู้ใช้งานได้อีกด้วย

และหากข้อมูลบางอย่างถูกคำนวณมาได้จากทั้ง state และ prop ข้อมูลนั้นคงจะไม่ควรถูกเก็บไว้ใน state ตัวอย่างเช่น แทนที่เราจะเก็บทั้งค่า `celsiusValue` and `fahrenheitValue` ไว้ เราเพียงแค่เก็บค่า `temperature` ล่าสุดที่ถูกอัพเดท พร้อมกับ `scale` ก็เพียงพอ เพราะเราสามารถคำนวณค่าอินพุทอีกค่าหนึ่ง ขณะที่ฟังก์ชัน `render()` ถูกเรียกได้จากค่าที่เราเก็บไว้อยู่แล้ว ซึ่งวิธีนี้ทำให้เราสามารถลบหรือเพิ่มการปัดเลขทศนิยมของอินพุทอีกค่าหนึ่งได้โดยไม่เสียความแม่นยำของอินพุทจากผู้ใช้

หากคุณพบเห็นสิ่งผิดปกติใน UI คุณสามารถใช้ [React Developer Tools](https://github.com/facebook/react/tree/master/packages/react-devtools) เพื่อตรวจสอบ prop นั้นและไล่ดูคอมโพเนนท์บรรพบุรุษของมันขึ้นไปเรื่อย ๆ จนคุณเจอกับคอมโพเนนท์ที่มีหน้าที่อัพเดท state นั้น สิ่งนี้ช่วยให้คุณสามารถค้นหาที่มาของบั๊กได้อย่างมีประสิทธิภาพ

<<<<<<< HEAD
=======
When you see something wrong in the UI, you can use [React Developer Tools](https://github.com/facebook/react/tree/main/packages/react-devtools) to inspect the props and move up the tree until you find the component responsible for updating the state. This lets you trace the bugs to their source:
>>>>>>> 4fab3d31469ab7a53dbf8b50cab5d57880a0c035

<img src="../images/docs/react-devtools-state.gif" alt="Monitoring State in React DevTools" max-width="100%" height="100%">

