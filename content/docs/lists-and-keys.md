---
id: lists-and-keys
title: Lists and Keys
permalink: docs/lists-and-keys.html
prev: conditional-rendering.html
next: forms.html
---

เราจะเริ่มจากการรีวิวในการปรับเปลี่ยน lists ใน JavaScript

จากโค๊ดที่อยู่ด้านล่าง เราใช้ฟังก์ชั่น [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) โดยการใส่ array ของ `numbers` แล้วนำตัวเลขเหล่านี้มาคูณสอง โดยเรานำ array ผลลัพธ์ที่ได้มาจาก `map()` ใส่ลงไปในตัวแปร `doubled` จากนั้นก็บันทึกมันออกมา

```javascript{2}
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

ผลการบันทึกที่ได้จาก console คือ `[2, 4, 6, 8, 10]`

ใน React การเปลี่ยน arrays ให้มาอยู่ในรูปของ list ของ [elements](/docs/rendering-elements.html) นั้นแทบจะเหมือนกันใน JavaScript

### การแสดงผลหลายคอมโพเนนท์(Rendering Multiple Components) {#rendering-multiple-components}

คุณสามารถสร้างกลุ่มของ elements และ [รวมพวกมันเข้าไว้ใน JSX](/docs/introducing-jsx.html#embedding-expressions-in-jsx) โดยการใช้วงเล็บปีกกา `{}`

ด้านล่างนี้ เราทำการลูป array ของ `numbers` โดยใช้ฟังก์ชั่น [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) ของ Javascript จากนั้นเราคืนค่าเป็น element ของ `<li>` สำหรับทุกๆ ค่าตัวเลขใน `numbers` และสุดท้ายเราได้กำหนดค่าผลลัพธ์ของ array ไปยัง `listItems`:

```javascript{2-4}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

จากนั้นเรานำ `listItems` array ไปไว้ภายใน `<ul>` และ[แสดงผลมันไปยัง DOM](/docs/rendering-elements.html#rendering-an-element-into-the-dom):

```javascript{2}
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

โค๊ดนี้จะแสดงผลเป็น bullet list ของตัวเลขตั้งแต่ 1 ถึง 5

### พื้นฐานของ List คอมโพเนนท์(Basic List Component) {#basic-list-component}

ปกติแล้วเราจะแสดงผล lists ภายใน[คอมโพเนนท์](/docs/components-and-props.html)

โดยเราจะแก้ใขจากตัวอย่างก่อนหน้าให้เป็นคอมโพเนนท์ที่รับค่า array ของ `numbers` และแสดงผลลัพธ์ออกมาเป็น list ของ elements

```javascript{3-5,7,13}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

เมื่อคุณรันโค๊ดนี้ คุณจะได้ได้รับคำเตือนว่า list items นั้นควรจะมีค่าของ key ด้วย ซึ่ง "key" เป็นคุณลักษณะพิเศษ ที่คุณจำเป็นต้องเพิ่มเข้ามาเมื่อคุณสร้าง list ของ elements และเราจะพูดความสำคัญของมันในส่วนต่อไปอีกที

การกำหนดค่า `key` ให้กับ list items ของเราภายใน  `numbers.map()`  เพื่อจะแก้ใขในประเด็นที่ค่าของ key
ไม่ปรากฏ

```javascript{4}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/jrXYRR?editors=0011)

## Keys {#keys}

Keys นั้นช่วย React ในการระบุว่า items ไหนมีการเปลี่ยนแปลง ถูกเพิ่มเข้ามา หรือ ถูกเอาออกไป โดย key ที่ถูกกำหนดอยู่ใน elements ภายใน array ควรจะมีความมั่นคง(stable)ในการระบุ element นั้น:

```js{3}
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

ทางที่ดีที่สุดในการเลือก key คือการใช้ข้อความที่มีเอกลักษ์(unique string) ในการระบุตัวตนของ list item กับเพื่อนๆของมัน ซึ่งส่วนใหญ่คุณมักจะใช้ IDs ที่มาจากข้อมูลของคุณเองมาเป็นค่า key:

```js{2}
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

หากคุณไม่มี IDs ที่คงที่สำหรับการแสดงผล items แล้วนั้นคุณอาจจะใช้ดัชนี(index)ของ item มาเป็นค่าของ key ได้:

```js{2,3}
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```
แต่เราไม่แนะนำให้ใช้ค่าดัชนีมาเป็นค่า key ถ้าลำดับของ items มีการเปลี่ยนแปลงได้ ซึ่งมันอาจส่งผลร้ายต่อประสิทธิภาพการทำงาน และอาจมีปัญหากับ สถานะของคอมโพเนนท์ด้วย ลองอ่านบทความของ Robin Pokorny สำหรับ [in-depth explanation on the negative impacts of using an index as a key (ผลกระทบเชิงลึกในการใช้ดัชนีเป็นค่า key)](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) อย่างไรก็ตามหากคุณไม่กำหนดค่า key ให้กับ list items แล้ว React จะกำหนดค่าปริยายให้โดยใช้ค่าดัชนีเป็นค่า key

และนี้คือ [in-depth explanation about why keys are necessary(ทำไมค่่า key ถึงสำคัญในเชิงลึก)](/docs/reconciliation.html#recursing-on-children) ถ้าคุณสนใจที่จะศึกษาเพิ่มเติม

### แยกคอมโพเนนท์ที่มี key (Extracting Components with Keys) {#extracting-components-with-keys}

Keys จะมีความหมายเมื่ออยู่ในบริบทที่อยู่ทามกลาง array เท่านั้น

ตัวอย่างเช่น ถ้าคุณ[แยก](/docs/components-and-props.html#extracting-components)คอมโพเนนท์ `ListItem` ออกมา คุณควรจะกำหนดค่า key ไว้ที่ `<ListItem />` ซึ่งอยู่ใน array ไม่ใช่กำหนดไว้ใน `<li>` ที่อยู่ภายตัวของ `ListItem`

**ตัวอย่าง: ที่ไม่ถูกต้องในการใช้ Key**

```javascript{4,5,14,15}
function ListItem(props) {
  const value = props.value;
  return (
    // ผิด! ไม่มีความจำเป็นที่จะใส่ key ที่นี้:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**ตัวอย่าง: ที่ถูกต้องในการใช้ Key**

```javascript{2,3,9,10}
function ListItem(props) {
  // ถูกต้อง! ไม่จำเป็นต้องใส่ค่า key ที่นี้:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // ถูกต้อง! Key ควรถูกกำหนดภายใน array
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/ZXeOGM?editors=0010)

กฏของนิ้วโป้งที่ดีนั้น elements ใดๆที่ถูกเรียกภายใน `map()` นั้นจำเป็นต้องมี key

### ค่า key จะต้องมีเอกลักษ์ในหมู่พี่น้องของมัน(Keys Must Only Be Unique Among Siblings){#keys-must-only-be-unique-among-siblings}

<<<<<<< HEAD
ค่า key ที่ใช้ใน arrays นั้นจะต้องมีความเป็นเอกลักษ์ในหมู่พี่น้องของมันเท่านั้น  แต่ไม่จำเป็นต้องมีเอกลักษ์ในทุกๆที่(Globally) เราอาจจะใช้ key เดียวกันเมื่อเราสร้าง array ที่ต่างกัน 2 ชุดได้:
=======
Keys used within arrays should be unique among their siblings. However, they don't need to be globally unique. We can use the same keys when we produce two different arrays:
>>>>>>> 4fab3d31469ab7a53dbf8b50cab5d57880a0c035

```js{2,5,11,12,19,21}
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/NRZYGN?editors=0010)

Key สามารถเป็นตัวช่วยใน React แต่มันจะไม่ถูกส่งผ่านเข้าไปในคอมโพเนนท์ของคุณ ถ้าคุณต้องการใช้ค่าที่เหมือนกับค่า key ในคอมโพเนนท์ คุณจะต้องส่งผ่าน props ในชื่ออื่นแทน:

```js{3,4}
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

จากตัวอย่างด้านบน คอมโพเนนท์ `Post` สามารถอ่านค่า `props.id` ได้ แต่จะอ่าน `props.keys` ไม่ได้

### การฝังตัว map() ใน JSX (Embedding map() in JSX) {#embedding-map-in-jsx}

ในตัวอย่างด้านบนเราประกาศตัวแปร `listItems` ต่างหาก และรวมอยู่ใน JSX:

```js{3-6}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

JSX อนุญาตให้[ฝัง expression อะไรก็ได้](/docs/introducing-jsx.html#embedding-expressions-in-jsx) ในวงเล็บปีกกา ดังนั้นเราจึงสามารถทำ inline `map()` ได้:

```js{5-8}
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/BLvYrB?editors=0010)

ในบางกรณีการทำเช่นนี้ทำให้โค๊ดดูสะอาดขึ้น แต่บางครั้งการเขียนเช่นนี้อาจจะถูกมองว่ามักง่าย เหมือนกับใน JavaScript มันขึ้นอยู่กับการตัดสินใจของคุณว่ามันคุ้มค่าที่จะแยกออกมาเป็นตัวแปรให้อ่านง่าย หรือเก็บไว้ในใจถ้าในตัวของ `map()` นั้นมันดูยุ่งเหยิงเกินไป และอาจจะเป็นเวลาที่ดีในการ[แยกคอมโพเนนท์](/docs/components-and-props.html#extracting-components)
