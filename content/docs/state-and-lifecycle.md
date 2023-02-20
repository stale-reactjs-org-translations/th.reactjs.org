---
id: state-and-lifecycle
title: State and Lifecycle
permalink: docs/state-and-lifecycle.html
redirect_from:
  - "docs/interactivity-and-dynamic-uis.html"
prev: components-and-props.html
next: handling-events.html
---

<<<<<<< HEAD
หน้านี้จะแนะนำแนวคิดของ state(สถานะ) และ lifecycle(วงจรชีวิต)ใน React คอมโพเนนท์ คุณสามารถหา[รายละเอียดเอกสารอ้างอิงคอมโพเนนท์ API](/docs/react-component.html).

พิจารณาตัวอย่าง ticking clock จาก [ในเอกสารก่อนหน้า](/docs/rendering-elements.html#updating-the-rendered-element) ใน [Rendering Elements](/docs/rendering-elements.html#rendering-an-element-into-the-dom) เราได้เรียนรู้ว่าทางเดียวที่เราจะสามารถปรับปรุงการแสดงผลได้ จากการเรียก `ReactDOM.render()` เพื่อเปลี่ยนแปลงผลลัพธ์บนหน้าจอ:
=======
> Try the new React documentation.
> 
> These new documentation pages teach modern React and include live examples:
>
> - [State: A Component's Memory](https://beta.reactjs.org/learn/state-a-components-memory)
> - [Synchronizing with Effects](https://beta.reactjs.org/learn/synchronizing-with-effects)
>
> The new docs will soon replace this site, which will be archived. [Provide feedback.](https://github.com/reactjs/reactjs.org/issues/3308)

This page introduces the concept of state and lifecycle in a React component. You can find a [detailed component API reference here](/docs/react-component.html).

Consider the ticking clock example from [one of the previous sections](/docs/rendering-elements.html#updating-the-rendered-element). In [Rendering Elements](/docs/rendering-elements.html#rendering-an-element-into-the-dom), we have only learned one way to update the UI. We call `root.render()` to change the rendered output:
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

```js{10}
const root = ReactDOM.createRoot(document.getElementById('root'));
  
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/gwoJZk?editors=0010)

ในส่วนนี้ เราจะเรียนรู้การสร้าง `Clock` คอมโพนเนนท์ที่สามารถนำกลับมาใช้ใหม่ได้และมีการห่อหุ้มตัวเอง(encapsulation) คอมโพเนนท์จะมีการสร้างตัวจับเวลา(timer)ของตัวเอง และปรับปรุงตัวเองทุกๆวินาที

เราสามารถเริ่มห่อคอมโพเนนท์ `Clock` และโค๊ดจะเปลี่ยนเป็นดังนี้:

```js{5-8,13}
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/dpdoYR?editors=0010)

อย่างไรก็ตาม ความต้องการที่สำคัญคือ `Clock` นั้นจะต้องสร้างตัวจับเวลา(timer)และสามารถปรับปรุงการแสดงผลในทุกๆวินาที และรายละเอียดในการทำงานของ `Clock` จะต้องถูกเขียนขึ้น

อันที่จริงเราต้องการเขียนโค๊ดนี้เพียงครั้งเดียวและทำให้ `Clock` สามารถปรับปรุงภายในตัวเองได้:

```js{2}
root.render(<Clock />);
```

เพื่อจะพัฒนาในส่วนนี้ เราจำเป็นต้องเพิ่ม State เข้าไปใน `Clock` คอมโพเนนท์

State จะมีความคล้ายคลึงกับ Props แต่จะมีความเป็นส่วนตัว(private) และสามารถควบคุมได้เต็มที่จากคอมโพเนนท์

## เปลี่ยนจากฟังก์ชั่น (Function) ให้เป็นคลาส (Class) {#converting-a-function-to-a-class}

คุณสามารถเปลี่ยนฟังก์ชั่นคอมโพเนนท์่เช่น `Clock` ให้เป็นคลาสได้ใน 5 ขั้นตอน:

1. สร้าง [ES6 คลาส](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) ในชื่อเดียวกันและมีการ extends `React.Component`

2. สร้างเมธอด(method) ที่มีชื่อว่า `render()`

3. ย้ายโค๊ดในตัวของฟังก์ชั่นไปไว้ใน `render()` เมธอด

4. เปลี่ยนชื่อตัวแปลภายในตัวของ `render()` จาก `props` เป็น `this.props` 

5. ลบฟังก์ชั่นที่ว่างทั้งหมดออกไป

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/zKRGpo?editors=0010)

`Clock` จะถูกประกาศในรูปแบบของคลาสแทนรูปแบบของฟังก์ชั่น

สำหรับเมธอด `render` จะถูกเรียกทุกครั้งที่มีการปรับปรุงเกิดขึ้น แต่ถ้าหากเราใช้ `<Clock />` ใน DOM node เดิม จะมีเพียงอินสแตนเดียวของคลาส `Clock` เท่านั้นที่จะถูกสร้างขึ้นมาใช้ นี้ทำให้เรามีความสามารถเพิ่มเติมเช่น local state(สถานะภายใน) และเมธอดของวงจรขีวิต (lifecycle methods)

## เพิ่ม local state เข้าไปในคลาส {#adding-local-state-to-a-class}

เราะจะย้าย `date` จาก props ให้เป็น state ภายใน 3 ขั้นตอน:

1) เปลี่ยนจาก `this.props.date` ด้วย `this.state.date` ภายในเมธอด `render()`:

```js{6}
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

2) เพิ่ม [constructor คลาส](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor) และกำหนดค่่าเริ่มต้นของ `this.state`:

```js{4}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

หมายเหตุ นี้คือการส่งผ่าน `props` ไปยัง constructor พื้นฐาน:

```js{2}
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

คลาสคอมโพเนนท์จำเป็นต้องเรียกใช้ construtor พื้นฐานด้วย `props` เสมอ

3) นำ `date` ออกจาก prop ที่เป็นในองค์ประกอบ `<Clock />`:

```js{2}
root.render(<Clock />);
```

จากนี้ต่อไปเราจะเพิ่มตัวจับเวลากลับเข้าไปในตัวของคอมโพเนนท์

ผลลัพท์จะมีลักษณะดังนี้:

```js{2-5,11,18}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/KgQpJd?editors=0010)

ต่อไปเราจะทำให้ `Clock` สร้างตัวจับเวลาในตัวเอง และปรับปรุงตัวเองทุกๆวินาที

## เพิ่มเมธอดวงจรชีวิต (Lifecycle Methods) เข้าไปในคลาส {#adding-lifecycle-methods-to-a-class}

ในการใช้งานคอมโพเนนท์จำนวนมาก และการขอคืนทรัพยากรที่ถูกใช้โดยคอมโพเนนท์นั้นจึงสำคัญมาก เมื่อคอมโพเนนท์นั้นถูกทำลาย

เราจะ[สร้างตัวจับเวลา](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) เมื่อ `Clock` ได้ถูกแสดงผลใน DOM ในครั้งแรกแล้ว ใน React จะเรียกว่า "การเชื่อมต่อ" ("mounting")

เราก็ต้องการ[เคลียร์ตัวจับเวลา](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval) เมื่อ DOM ที่ถูกสร้างจาก `Clock` นั้นถูกนำออกไป ใน React จะเรียกว่า "ยกเลิกการเชื่อมต่อ" ("unmounting")

เราสามารถประกาศเมธอดพิเศษในคลาสคอมโพเนนท์เพื่อที่จะรันโค๊ดบางส่วน เมื่อคอมโพเนนท์นั้นมีการ เชื่อมต่อ(mounts) และ ยกเลิกการเชื่อมต่อ(unmount):

```js{7-9,11-13}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

เมธอดเหล่านี้เรียกว่า "เมธอดวงจรชีวิต" ("lifecycle methods")

เมธอด `componentDidMount()` นี้จะรันหลังจากผลลัพท์ของคอมโพเนนท์ได้แสดงผลใน DOM แล้ว และตรงนี้คือที่ที่เหมาะสำหรับการสร้างตัวจับเวลา:

```js{2-5}
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```

หมายเหตุ เราสามารถบันทึก timer ID ไว้ใน `this` (`this.timerID`).

ในขณะที่ `this.props` ถูกกำหนดโดยตัวของ React และ `this.state` มีความหมายพิเศษ คุณยังมีอิสระในการเพิ่มส่วนประกอบที่เก็บข้อมูลของคลาสได้ตามต้องการ ถ้าข้อมูลเหล่านั้นไม่มีความเกี่ยวข้องกับกระแสข้อมูล(data flow)โดยตรงเช่น timer ID

เราสามารถหยุดการทำงานของตัวจับเวลาได้ในเมธอด `componentWillUnmount()` :

```js{2}
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

สุดท้ายนี้ เราจะต้องสร้างเมธอดชื่อว่า `tick()` ซึ่งทำให้ `Clock` คอมโพเนนท์เรียกใช้งานในทุกๆวินาที

ซึ่งจะมีการใช้ `this.setState()` เพื่อกำหนดการ(schedule)ปรับปรุง state ของคอมโพเนนท์:

```js{18-22}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/amqdNA?editors=0010)

ขณะนี้นาฬิกาจะทำงานทุกๆวินาที

มาสรุปกันว่าเกิดอะไรขึ้น และลำดับการเรียกใช้ของแต่ละเมธอด:

<<<<<<< HEAD
1) เมื่อ `<Clock />` ถูกใส่เข้าไปใน `ReactDOM.render()` React จะเรียก constructor ของคอมโพเนนท์ `Clock` เมื่อ `Clock` ต้องการแสดงผลเวลาปัจจุบัน มันจะทำการเตรียม `this.state` ที่มีออบเจ็คที่เก็บข้อมูลเวลาปัจจุบัน ซึ่งเราจะต้องนำข้อมูลในส่วนนี้ไปใช้ในการปรับปรุงต่อไปในอนาคต
=======
1) When `<Clock />` is passed to `root.render()`, React calls the constructor of the `Clock` component. Since `Clock` needs to display the current time, it initializes `this.state` with an object including the current time. We will later update this state.
>>>>>>> 63c77695a95902595b6c2cc084a5c3650b15210a

2) React จะเรียกเมธอด `render()` ของคอมโพเนนท์ `Clock` นี้คือวิธีที่ทำให้ React รู้ว่าอะไรควรที่ถูกนำไปแสดงผลบนจอภาพ จากนั้น React จะทำการปรับปรุง DOM ให้ตรงกับผลลัพธ์ของ `Clock`

3) เมื่อผลลัพธ์ `Clock` ถูกใส่เข้าไปใน DOM แล้ว React จะเรียกเมธอดวงจรชีวิต `componentDidMount()` ขึ้นมา ซึ่งภายในนั้นคอมโพเนนท์ `Clock` จะร้องขอให้เบราว์เซอร์(Browser) สร้างตัวจับเวลา(Timer)ขึ้นเพื่อนำมาเรียกใช้งานคอมโพเนนท์เมธอด `tick()` ในทุกๆวินาที

4) ในทุกๆวินาทีเบราว์เซอร์จะทำการเรียกเมธอด `tick()` จากนั้นคอมโพเนนท์ `Clock` จะกำหนดการปรับปรุงส่วนแสดงผลโดยการเรียกใช้ `setState()` ด้วยออบเจ็คที่ประกอบด้วยข้อมูลเวลาปัจจุบัน ในการเรียกใช้ `setState()` จะทำให้ React รู้ว่ามีการเปลี่ยนแปลงของ Local state และจะมีการเรียกใช้เมธอด `render()` อีกครั้ง เพื่อจะคำนวนผลลัพธ์และจะปรับปรุงการแสดงผลบนจอภาพอย่างไร ซึ่งในขณะนี้ `this.state.date` ที่อยู่ในเมธอด `render()` จะมีความแตกต่างจากเดิม และการแสดงผลลัพธ์นั้นจะแสดงเวลาที่ถูกปรับปรุงแล้ว และ React จะปรับปรุง DOM ตามไปด้วย

5) ถ้าคอมโพเนนท์ `Clock` นั้นได้ถูกเอาออกไปจาก DOM จะทำให้ React นั้นเรียกเมธอดวงจรชีวิต `componentWillUnmount()` ซึ่งจะส่งผลให้ตัวจับเวลาหยุดทำงาน

## ใช้ state อย่างถูกต้อง {#using-state-correctly}

มี 3 อย่างที่คุณควรที่รู้เกี่ยวกับ `setState()`

### อย่าแก้ใขค่า state โดยตรง {#do-not-modify-state-directly}

ตัวอย่างนี้ จะไม่ทำให้คอมโพเนนท์คำนวนการแสดงผลใหม่:

```js
// ผิด
this.state.comment = 'Hello';
```

ควรจะใช้เมธอด `setState()`:

```js
// ถูก
this.setState({comment: 'Hello'});
```

ที่เดียวที่จะกำหนดค่าด้วย `this.state` ได้คือที่ constructor เท่านั้น

### การปรับปรุง state อาจจะการทำงานแบบไม่เข้าจังหวะ (Asynchronous) {#state-updates-may-be-asynchronous}

React อาจจะรวมการเรียกใช้ `setState()` หลายๆครั้ง รวมมาเป็นการปรับปรุงในครั้งเดียวเพื่อประสิทธิภาพ

เพราะ `this.props` และ `this.state` อาจจะถูกปรับปรุงแบบไม่เข้าจังหวะ คุณไม่ควรใช้ค่าของ state เดิมเป็นพื้นฐานในการคำนวนค่า state อันต่อไป

ตัวอย่างเช่น โค๊ดนี้อาจจะทำให้การปรับปรุงตัวนับค่าล้มเหลว:

```js
// ผิด
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

เพื่อจะแก้ใข ให้ใช้รูปแบบที่สองของ `setState()` ซึ่งจะใช้ฟังก์ชั่นเป็นอาร์กิวเมนท์ แทนที่การใช้ออบเจ็ค ซึ่งฟังก์ชั่นนั้นจะรับค่าของ `state` ก่อนหน้าเป็นอาร์กิวเมนท์แรก และค่าของ `props` ในขณะนั้นเป็นอากิวเมนท์ที่สอง:

```js
// ถูก
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

เราสามารถใช้ [arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) เช่นด้านบน อย่างไรก็ตามเราก็สามารถใช้ฟังก์ชั่นแบบปกติได้เช่นกัน:

```js
// ถูก
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

### State ที่ถูกปรับปรุงจะถูกนำมารวมกัน (merged) {#state-updates-are-merged}

เมื่อเราเรียก `setState()` React จะนำออบเจ็คที่คุณส่งให้เข้าไปรวมกับออบเจ็คของ state ปัจจุบัน

ตัวอย่างเช่น state ของคุณอาจจะตัวแปลหลากหลายตัว:

```js{4,5}
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

จากนั้นคุณสามารถปรับตัวแปลแต่ละตัวแยกจากกันได้โดยเรียก `setState()` หลายครั้ง:

```js{4,10}
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

การรวมจะเป็นแบบผิวเผิน ซึ่ง `this.setState({comments})` จะไม่ไปปรับปรุง `this.state.posts` แต่จะแทนที่อย่างสมบูรณ์ใน `this.state.comments`

## ข้อมูลจะใหลลงล่าง {#the-data-flows-down}

เราจะบอกได้ว่าสิ่งนี้เป็นคอมโพเนนท์หรือไม่นั้นให้เราดูว่า คอมโพเนนท์นั้นมี state หรือ stateless(คอมโพเนนท์ที่ไม่มี state) ซึ่งไม่จำเป็นว่าจะสร้างมาจากฟังก์ชั่นหรือคลาส

และนี้เป็นสาเหตุทำให้ state เป็นส่ิงที่อยู่ภายใน หรือ ถูกห่อหุ้มเอาไว้ และไม่สามารถเข้าถึงได้จากคอมโพเนนท์อื่น ยกเว้นคอมโพเนนท์ที่เป็นเจ้าของ state นั้น

คอมโพเนนท์นั้นอาจจะเลือกที่จะส่งผ่าน state ลงไปสู่คอมโพเนนท์ลูก ด้วยการส่งผ่าน props ของคอมโพเนนท์ลูก:

```js
<<<<<<< HEAD
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

นี้ยังใช้งานกันคอมโพเนนท์ที่สร้างขึ้นมาเองได้ด้วย:

```js
=======
>>>>>>> df2fbde3b52336229eee550debd692184c427691
<FormattedDate date={this.state.date} />
```

คอมโพเนนท์ `FormattedDate` จะได้รับ `date` ในรูปแบบของ props และไม่สามารถรู้ได้ว่าแหล่งที่มา ว่ามาจาก state ของ `Clock` หรือมาจาก props ของ `Clock` หรือเป็นค่าที่พิมพ์ด้วยมือ:

```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/zKRqNB?editors=0010)

โดยทั่วไปแล้วจะเรียกการไหลของข้อมูลเป็นแบบ "บนลงล่าง" (top-down) หรือ "หลายทิศทาง" ("unidirectional") สำหรับ state ใดๆจะมีเจ้าของโดยคอมโพเนนท์หนึ่งๆเสมอ และไม่ว่าจะเป็นข้อมูลหรือการแสดงผลที่เป็นผลจากคำนวนจาก state สามารถส่งผลต่อคอมโพเนนท์ที่อยู่ใต้ต้นไม้(component tree)

ถ้าคุณจินตนาการว่า ต้นไม้คอมโพเนนท์เป็นน้ำตกของ props แล้วนั้น ในแต่ละ state ของคอมโพเนนท์จะเปรียบเหมือนแหล่งกำเนิดของน้ำที่เกิดขึ้นมารวมกัน แต่ก็จะต้องใหลลงด้านล่างตามเดิม

เพื่อจะแสดงให้เห็นว่าคอมโพเนนท์นั้นอยู่อย่างเป็นเอกเทศน์ เราสามารถสร้าง คอมโพเนนท์ `App` และใส่คอมโพเนนท์ `<Clock>` เข้าไป 3 ตัว:

```js{4-6}
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/vXdGmd?editors=0010)

แต่ละ `Clock` จะสร้างตัวจับเวลา และปรับปรุงค่า state อย่างอิสระ.

ใน React apps ไม่ว่าคอมโพเนนท์นั้นจะมี state หรือไม่ ให้ระลึกไว้ว่ารายละเอียดภายในคอมโพเนนท์นั้นสามารถเปลี่ยนแปลงได้เสมอ ซึ่งในทางกลับกัน คุณจะสามารถใช้คอมโพเนนท์ที่มี state ในคอมโพเนนท์ที่ไม่มี state ได้เช่นกัน
