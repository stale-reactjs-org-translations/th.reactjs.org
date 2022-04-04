---
id: components-and-props
title: คอมโพเนนท์และพรอพส์
permalink: docs/components-and-props.html
redirect_from:
  - "docs/reusable-components.html"
  - "docs/reusable-components-zh-CN.html"
  - "docs/transferring-props.html"
  - "docs/transferring-props-it-IT.html"
  - "docs/transferring-props-ja-JP.html"
  - "docs/transferring-props-ko-KR.html"
  - "docs/transferring-props-zh-CN.html"
  - "tips/props-in-getInitialState-as-anti-pattern.html"
  - "tips/communicate-between-components.html"
prev: rendering-elements.html
next: state-and-lifecycle.html
---

เราสามารถมองและแบ่งส่วนติดต่อผู้ใช้งานออกเป็นส่วนย่อยๆที่ไม่มีความเกี่ยวข้องกันและสามารถนำไปใช้ซ้ำในที่อื่นๆได้ด้วยคอมโพเนนท์ ในหัวข้อนี้เราจะมาเริ่มต้นทำความรู้จักกับแนวคิดของคอมโพเนนท์กัน ในส่วนของ[รายละเอียดการใช้งาน API ของคอมโพเนนท์สามารถดูได้ที่นี่](/docs/react-component.html)

โดยแนวคิดแล้วคอมโพเนนท์นั้นคล้ายกับฟังก์ชัน JavaScript โดยที่มันรับข้อมูล (เรียกว่า "พรอพส์") เข้ามาแล้วตอบกลับด้วย React element ซึ่งเป็นสิ่งที่ถูกนำไปแสดงบนหน้าจอ

## ฟังก์ชันและคลาสคอมโพเนนท์ {#function-and-class-components}

วิธีที่ง่ายที่สุดในการสร้างคอมโพเนนท์คือการเขียนขึ้นมาด้วย JavaScript ฟังก์ชัน

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

ฟังก์ชันนี้ถือเป็น React คอมโพเนนท์เพราะมันรับข้อมูล "พรอพส์" (มาจากภาษาอังกฤษคำว่า Properties) อ็อปเจคและตอบกลับไปด้วย React element เราเรียกคอมโพเนนท์ลักษณะนี้ว่า "ฟังก์ชันคอมโพเนนท์" เพราะรูปแบบการเขียนของมันเป็นแบบฟังก์ชันของ JavaScript

เรายังสามารถสร้างคอมโพเนนท์โดยใช้ [คลาส ES6](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)


```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

ในมุมมองของ React แล้วทั้งสองคอมโพเนนท์ด้านบนนั้นเหมือนกัน

ฟังก์ชันและคลาสมีคุณสมบัติอื่นๆ เพิ่มเติม ซึ่งจะพูดถึงใน[หัวข้อถัดไป](/docs/state-and-lifecycle.html)

## การแสดงผลของคอมโพเนนท์ {#rendering-a-component}

ก่อนหน้านี้เราได้เห็น React element ที่สร้างขึ้นมาจากแทก DOM

```js
const element = <div />;
```

แต่นอกจากนั้นแล้ว React element ยังสามารถจากคอมโพเนนท์ที่สร้างขึ้นเองได้อีกด้วย

```js
const element = <Welcome name="Sara" />;
```

เมื่อ React พบว่ามี element ที่เป็นคอมโพเนนท์แบบที่สร้างขึ้นมาเอง มันจะทำการแปลงแอตทริบิวต์ของ JSX และลูกๆ ของมันให้เป็นอ็อปเจคที่เรียกว่า "พรอพส์" แล้วส่งค่าเข้าไปให้กับคอมโพเนนท์

จาก Code ตัวอย่างนี้ หน้าจอจะทำการแสดงผลคำว่า "Hello, Sara" ออกมา

```js{1,5}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

<<<<<<< HEAD
[ทดลองเขียนบน CodePen](codepen://components-and-props/rendering-a-component)
=======
**[Try it on CodePen](https://codepen.io/gaearon/pen/YGYmEG?editors=1010)**
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

เรามาลองดูกันว่ามีอะไรเกิดขึ้นบ้างในตัวอย่างนี้

<<<<<<< HEAD
1. เราเรียก `ReactDOM.render()` ด้วย `<Welcome name="Sara" />`
2. React เรียกดูคอมโพเนนท์ `Welcome` ด้วยพรอพส์ `{name: 'Sara'}`
3. คอมโพเนนท์ `Welcome` ของเรานั้นตอบกลับด้วย element `<h1>Hello, Sara</h1>`
4. React DOM ทำการแก้ไข DOM ให้กลายเป็น `<h1>Hello, Sara</h1>`.
=======
1. We call `root.render()` with the `<Welcome name="Sara" />` element.
2. React calls the `Welcome` component with `{name: 'Sara'}` as the props.
3. Our `Welcome` component returns a `<h1>Hello, Sara</h1>` element as the result.
4. React DOM efficiently updates the DOM to match `<h1>Hello, Sara</h1>`.
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

>**สังเกต:** การตั้งชื่อคอมโพเนนท์ให้ขึ้นต้นด้วยภาษาอังกฤษตัวพิมพ์ใหญ่เสมอ
>
>React มองคอมโพเนนท์ที่ชื่อขึ้นต้นด้วยภาษาอังกฤษตัวพิมพ์เล็กว่าเป็นแทกของ DOM. เช่น React มอง `<div />` นั้นเป็น HTML div แทก แต่มอง `<Welcome />` ว่าเป็นคอมโพเนนท์ และการจะแสดงผลได้นั้นจะต้องมี `Welcome` อยู่ภายในสโคป 
>
>เหตุผลเบื้องหลังของการตั้งข้อกำหนดนี้สามารถเรียนรู้เพิ่มเติมได้จาก [เจาะลึก JSX](/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)

## ส่วนประกอบของคอมโพเนนท์ {#composing-components}

คอมโพเนนท์สามารถอ้างอิงและใช้งานคอมโพเนนท์อื่นๆได้ ซึ่งทำให้เราสามารถใช้งานคอมโพเนนท์ได้ในทุกระดับเช่น ปุ่ม, ฟอร์ม, กล่องข้อความ หรือแม้กระทั่งทั้งหน้าจอ ทุกสิ่งทุกอย่างใน React นั้นถูกแสดงผ่านทางคอมโพเนนท์

ยกตัวอย่างเช่น เราสามารถสร้างคอมโพเนนท์​ `App` ที่แสดงผลคอมโพเนนท์ `Welcome` หลายๆครั้งได้

```js{8-10}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

<<<<<<< HEAD
[ทดลองเขียนบน CodePen](codepen://components-and-props/composing-components)
=======
**[Try it on CodePen](https://codepen.io/gaearon/pen/KgQKPr?editors=1010)**
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

โดยทั่วไปแล้ว แอพที่เขียนด้วย React นั้นจะมีคอมโพเนนท์ `App` อยู่บนสุด แต่อย่างไรก็ตาม มีบางกรณี เราอาจกำลังทำการผสาน React เข้าไปในแอพเดิมที่มีอยู่แล้ว ในกรณีเช่นนี้เราอาจจะเริ่มจากการเขียนคอมโพเนนท์เล็กๆเช่น `Button` ก่อน แล้วค่อยๆขยายการใช้งานเพิ่มขึ้นไปเรื่อยๆแบบล่างขึ้นบน

## การแบ่งส่วนของคอมโพเนนท์ {#extracting-components}

อย่าลังเลที่จะแบ่งส่วนคอมโพเนนท์ใหญ่ให้ออกเป็นคอมโพเนนท์เล็กๆ ยกตัวอย่างการแบ่งคอมโพเนนท์ `Comment` ออกส่วนย่อยๆ

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

<<<<<<< HEAD
[ทดลองเขียนบน CodePen](codepen://components-and-props/extracting-components)
=======
**[Try it on CodePen](https://codepen.io/gaearon/pen/VKQwEo?editors=1010)**
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

คอมโพเนนท์นี้รับ `author` (เป็นอ็อปเจค), `text` (เป็น string) และรับ `date` (เป็น date) เข้ามาเป็นพรอพส์แล้วทำการแสดงผลข้อความ Comment ขึ้นไปบนเว็บไซต์เครือข่ายสังคม

การแก้ไขคอมโพเนนท์นี้อาจทำได้ยากเนื่องจากถูกสร้างขึ้นมาแบบมี element หลายตัวที่ทับซ้อนกัน และการจะนำส่วนต่างๆแยกออกไปใช้นั้นยังทำได้ยาก เรามาลองแบ่งมันออกเป็นหลายๆคอมโพเนนท์กันดู

เริ่มจากคอมโพเนนท์ `Avatar`

```js{3-6}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

คอมโพเนนท์ `Avatar` ไม่จำเป็นต้องรู้ว่ามันจะถูกนำไปแสดงในคอมโพเนนท์ `Comment` ดังนั้นเราจึงตั้งชื่อพรอพส์ของมันกลางๆได้ว่า `user` แทนที่จะเป็น `author`

เราแนะนำให้ตั้งชื่อพรอพส์ตามมุมมองของคอมโพเนนท์เองมากกว่าที่จะเป็นบริบทที่มันถูกนำไปใช้

ตอนนี้คอมโพเนนท์ `Comment` ดูเรียบง่ายขึ้นมาอีกนิด

```js{5}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

ต่อไปเราจะทำการแยกคอมโพเนนท์ `UserInfo` ออกมา โดยคอมโพเนนท์นี้แสดงผลคอมโพเนนท์ `Avatar` และชื่อของผู้ใช้

```js{3-8}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

คอมโพเนนท์ `Comment` ดูเรียบง่ายเพิ่มขึ้นมาอีกนิด

```js{4}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

<<<<<<< HEAD
[ทดลองเขียนบน CodePen](codepen://components-and-props/extracting-components-continued)
=======
**[Try it on CodePen](https://codepen.io/gaearon/pen/rrJNJY?editors=1010)**
>>>>>>> 707f22d25f5b343a2e5e063877f1fc97cb1f48a1

การแบ่งส่วนคอมโพเนนท์อาจจะดูเป็นงานที่ดูจุกจิกในตอนแรก แต่การมีชุดของคอมโพเนนท์ที่สามารถนำไปใช้ซ้ำได้เยอะๆส่งผลดีต่อการพัฒนาในแอพที่ใหญ่ขึ้น หลักการง่ายๆคือถ้ามีส่วนของการแสดงผลที่นำไปใช้หลายๆครั้ง (เช่น `Button`, `Panel`, `Avatar`) หรือคอมโพเนนท์ที่ซับซ้อน (อย่างเช่น `App`, `FeedStory`, `Comment`) การสร้างมันให้เป็นคอมโพเนนท์ก็เป็นตัวเลือกดี

## พรอพส์นั้นต้องไม่เปลี่ยนแปลง {#props-are-read-only}

ไม่ว่าเราจะสร้างคอมโพเนนท์แบบ[ฟังก์ชันหรือคลาส](#function-and-class-components) ตัวคอมโพเนนท์นั้นจะต้องไม่มีการแก้ไขพรอพส์ภายในตัวมันเอง ลองพิจารณาจากฟังก์ชัน `sum` ดังต่อไปนี้

```js
function sum(a, b) {
  return a + b;
}
```

เราเรียกฟังก์ชันแบบนี้ว่าเป็น ["Pure ฟังก์ชัน"](https://en.wikipedia.org/wiki/Pure_function) เพราะว่ามันไม่มีการแก้ไขค่าที่มันรับเข้ามา และถ้าค่าที่มันรับเข้าไปเป็นแบบเดิมมันก็จะส่งผลลัพธ์ที่เป็นแบบเดิมออกมาเสมอ

ในทางตรงกันข้าม ฟังก์ชันต่อไปนี้เป็นแบบ Impure เพราะว่ามันมีการเปลี่ยนแปลงค่าที่มันรับเข้าไป

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

React นั้นค่อนข้างยืดหยุ่นมาก แต่มีกฎที่เข้มงวดอยู่ข้อเดียวคือ

**ทุกคอมโพเนนท์ของ React จะต้องให้ความสำคัญกับพรอพส์ของมันแบบเดียวกับ Pure ฟังก์ชันเสมอ**

เป็นเรื่องปกติที่ส่วนติดต่อผู้ใช้งานนั้นจะต้องมีการเปลี่ยนแปลงได้ ใน[หัวข้อถัดไป](/docs/state-and-lifecycle.html) เราจะมาทำความรู้จักกับ "สเตท" โดยสเตทนั้นทำให้คอมโพเนนท์ของ React มีการเปลี่ยนแปลงตอบสนองกับการใช้งานของผู้ใช้, เมื่อได้รับข้อมูลจาก network หรือเหตุการณ์ใดๆโดยที่ไม่ผิดกฎที่สำคัญข้างต้นได้

