---
id: introducing-jsx
title: แนะนำ JSX
permalink: docs/introducing-jsx.html
prev: hello-world.html
next: rendering-elements.html
---

พิจารณาการประกาศตัวแปรนี้:

```js
const element = <h1>Hello, World!</h1>;
```

แท็กไวยากรณ์ตลก ๆ นี้ไม่ใช่ทั้งสตริงหรือ HTML

มันเรียกว่า JSX และมันเป็นส่วนขยายไวยากรณ์ของ JavaScript เราแนะนำให้ใช้กับ React เพื่ออธิบายว่า UI ควรมีลักษณะอย่างไร JSX อาจะทำให้คุณนึกถึงภาษาเทมเพลท แต่มันมาพร้อมพลังความสามารถเต็มรูปแบบของ JavaScript

JSX สร้าง "องค์ประกอบ (Element)" ของ React เราจะมาสำรวจการทำให้มันแสดงผลที่ DOM ใน [หัวข้อถัดไป](/docs/rendering-elements.html) ด้านล่าง, คุณจะเจอพื้นฐานของ JSX ที่จำเป็นสำหรับการเริ่มต้นใช้งาน

### ทำไมต้องเป็น JSX? {#why-jsx}

React อ้าแขนรับความจริงที่ว่า ตรรกะสำหรับการแสดงผลนั้นเชื่อมโยงกับตรรกะ UI อื่น ๆ โดยเนื้อแท้ เช่น วิธิจัดการเหตุการณ์, วิธีการที่สเตทเปลี่ยนแปลงตลอดเวลา, และวิธีการเตรียมข้อมูลสำหรับการแสดงผล

แทนการแยกเทคโนโลยี *อย่างปลอม ๆ* โดยใส่มาร์กอัปและลอจิคในไฟล์แยกต่างหาก, React [แบ่งโค้ดออกเป็นส่วน ๆ](https://en.wikipedia.org/wiki/Separation_of_concerns) ด้วยคู่ยูนิตแบบหลวม ๆ เรียกว่า "คอมโพเนนท์" ที่ประกอบไปด้วยทั้งสองอย่าง เราจะกลับมาพูดเรื่องคอมโพเนนท์ใน [หัวข้อต่อไปข้างหน้า](/docs/components-and-props.html), แต่ถ้าคุณยังรู้สึกไม่สะดวกใจที่จะใส่มาร์กอัปใน JS, [การบรรยายนี้](https://www.youtube.com/watch?v=x7cQ3mrcKaY) อาจโน้มน้าวใจคุณก็เป็นได้

React [ไม่บังคับ](/docs/react-without-jsx.html) ว่างต้องใช้ JSX, แต่คนส่วนใหญ่พบว่ามันมีประโยชน์ในฐานะเป็นเครื่องช่วยเพื่อให้เห็นภาพเมื่อทำงานกับ UI ภายในโค้ด JavaScript นอกจากนี้ยังช่วยให้ React แสดงข้อผิดพลาดและข้อความเตือนที่มีประโยชน์มากขึ้นด้วย

พอหอมปากหอมคอละ, มาเริ่มกันเลยดีกว่า!

### การฝังนิพจน์ใน JSX {#embedding-expressions-in-jsx}

ในตัวอย่างด้านล่าง, เราประกาศตัวแปรชื่อ `name` และจากนั้นเราใช้มันใน JSX โดยห่อไว้ในเครื่องหมายปีกกา:

```js{1,2}
const name = 'Josh Perez';
const element = <h1>สวัสดี, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

คุณสามารถใส่ [นิพจน์ JavaScript ที่ถูกต้อง](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) ใด ๆ ด้านในวงเล็บปีกกาใน JSX ได้ ตัวอย่างเช่น `2 + 2`, `user.firstName`, หรือ `formatName(user)` เป็นนิพจน์ JavaScript ที่ถูกต้องทั้งหมด

ในตัวอย่างด้านล่าง, เราฝังผลลัพธ์ของการเรียกใช้ฟังก์ชัน JavaScript `formatName(user)` ไว้ใน `<h1>` ที่ตัวแปร `element`

```js{12}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    สวัสดี, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

[ทดลองบน Codepen](codepen://introducing-jsx)

เราแยก JSX เป็นหลายบรรทัดเพื่อให้อ่านง่าย ซึ่งจริง ๆ แล้วก็ไม่จำเป็น เมื่อทำเช่นนี้ นอกจากนี้เรายังแนะนำให้ห่อไว้ในวงเล็บเพื่อหลีกเลี่ยงข้อผิดพลาดของ [การแทรกเครื่องหมายเซมิโคลอน (;) โดยอัตโนมัติ](https://stackoverflow.com/q/2846283).

### JSX เป็นนิพจน์เช่นกัน {#jsx-is-an-expression-too}

หลังจากการคอมไพล์, นิพจน์ JSX จะกลายเป็นการเรียกใช้ฟังก์ชัน JavaScript ปกติและประเมินผลเป็น JavaScript อ็อปเจค

ซึ่งหมายความว่าคุณสามารถใช้ JSX ได้ในเงื่อนไข `if` และการวนซ้ำตามลำดับแบบ `for`, กำหนดค่าให้กับตัวแปร, แบบรับเป็นอาร์กิวเมนท์, และส่งคืนค่าจากฟังก์ชัน:

```js{3,5}
function getGreeting(user) {
  if (user) {
    return <h1>สวัสดี, {formatName(user)}!</h1>;
  }
  return <h1>สวัสดี, คนแปลกหน้า</h1>;
}
```

### การระบุแอตทริบิวต์ใน JSX {#specifying-attributes-with-jsx}

คุณสามารถใช้เครื่องหมายคำพูด เมื่อเป็นตัวอักษรสตริง ในแอตทริบิวต์:

```js
const element = <div tabIndex="0"></div>;
```

คุณอาจใช้วงเล็บปีกกา เมื่อฝังนิพจน์ JavaScript ในแอตทริบิวต์:

```js
const element = <img src={user.avatarUrl}></img>;
```

อย่าใส่เครื่องหมายคำพูดรอบวงเล็บปีกกาเมื่อทำการฝังนิพจน์ JavaScript ในแอตทริบิวต์ คุณควรใช้อัญประกาศ (สำหรับค่าสตริง) หรือ วงเล็บปีกกา (สำหรับนิพจน์) แต่ไม่ใช่ทั้งสองอย่างในแอตทริบิวต์เดียวกัน

>**คำเตือน:**
>
>เนื่องจาก JSX นั้นใกล้เคียงกับ JavaScript มากกว่า HTML, React DOM ใช้รูปแบบ `camelCase` ในการตั้งชื่อแอตทริบิวต์แทนการใช้ชื่อแอตทริบิวต์ของ HTML ตรง ๆ 
>
>ตัวอย่างเช่น `class` กลายเป็น [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) ใน JSX และ `tabindex` กลายเป็น [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex) เป็นต้น

### การระบุลูกใน JSX {#specifying-children-with-jsx}

ถ้าแท็กนั้นว่างเปล่า, คุณสามารถปิดได้ทันทีด้วย `/>` เหมือน XML:

```js
const element = <img src={user.avatarUrl} />;
```

JSX แท็กอาจมีลูก ๆ ด้วย:

```js
const element = (
  <div>
    <h1>สวัสดี!</h1>
    <h2>ดีจังที่ได้เจอคุณที่นี่</h2>
  </div>
);
```

### JSX ป้องกันการโจมตีจากการยิง {#jsx-prevents-injection-attacks}

การฝังอินพุตของผู้ใช้ใน JSX นั้นเป็นเรื่องที่ปลอดภัย:

```js
const title = response.potentiallyMaliciousInput;
// แบบนี้ปลอดภัย:
const element = <h1>{title}</h1>;
```

โดยค่าเริ่มต้น, React DOM [สกัด](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) ค่าใด ๆ ที่ฝังอยู่ใน JSX ก่อนเรนเดอร์ ดังนั้นจึงมั่นใจได้ว่าคุณจะไม่สามารถยิงสิ่งใดก็ตามที่ไม่ได้เขียนไว้ในแอปพลิเคชันของคุณอย่างชัดเจน ทุกอย่างถูกแปลงเป็นสตริงก่อนที่จะแสดงผล ซึ่งช่วยป้องกัน [XSS (การโจมตีด้วยสคริปต์ข้ามไซต์)](https://en.wikipedia.org/wiki/Cross-site_scripting)

### JSX เป็นตัวแทนของอ็อปเจค {#jsx-represents-objects}

Babel คอมไพล์ JSX ลงไปที่การเรียก `React.createElement()`

ตัวอย่างสองตัวอย่างนี้เหมือนกัน:

```js
const element = (
  <h1 className="greeting">
    Hello, World!
  </h1>
);
```

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, World!'
);
```

`React.createElement()` ทำการตรวจสอบสองสามครั้งเพื่อช่วยคุณเขียนโค้ดที่ไม่มีข้อบกพร่อง แต่โดยพื้นฐานแล้วมันจะสร้างอ็อปเจคเช่นนี้:

```js
// หมายเหตุ: โครงสร้างนี้ทำให้เข้าใจง่ายขึ้น
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, World!'
  }
};
```

อ็อปเจคเหล่านี้เรียกว่า "องค์ประกอบ" ของ React  คุณสามารถคิดว่าพวกมันเป็นคำอธิบายของสิ่งที่คุณต้องการจะเห็นบนหน้าจอ React อ่านอ็อปเจคเหล่านี้และใช้พวกมันเพื่อสร้าง DOM และปรับปรุงให้ทันสมัยอยู่เสมอ

เราจะทำความเข้าใจการแสดงผลขององค์ประกอบ React บน DOM ใน[หัวข้อถัดไป](/docs/rendering-elements.html)

>**เกร็ดความรู้:**
>
<<<<<<< HEAD
>เราแนะนำให้ใช้ [นิยามภาษาของ "Babel"](https://babeljs.io/docs/editors) สำหรับเครื่องมือแก้ไขข้อความที่คุณเลือกเพื่อให้ทั้ง ES6 และรหัส JSX ถูกเน้นอย่างถูกต้อง
=======
>We recommend using the ["Babel" language definition](https://babeljs.io/docs/en/next/editors) for your editor of choice so that both ES6 and JSX code is properly highlighted.
>>>>>>> 9df266413be637705d78688ffdd3697e89b102d1
