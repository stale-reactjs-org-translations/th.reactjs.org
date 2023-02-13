---
id: rendering-elements
title: การแสดงผลองค์ประกอบ
permalink: docs/rendering-elements.html
redirect_from:
  - "docs/displaying-data.html"
prev: introducing-jsx.html
next: components-and-props.html
---

องค์ประกอบเป็นกลุ่มของหน่วยที่เล็กที่สุดที่ถูกสร้างใน React แอปพลิเคชั่น

องค์ประกอบแต่ละตัวจะบอกลักษณะสิ่งที่คุณต้องการจะเห็นบนหน้าจอ:

```js
const element = <h1>Hello, world</h1>;
```

ต่างจากองค์ประกอบของ DOM ที่อยู่ในเบราเซอร์, องค์ประกอบของ React นั้นเป็นอ็อปเจคธรรมดา, และราคาถูกในการสร้าง, ตัว React DOM จะคอยจัดการปรับปรุง DOM ให้ตรงกับองค์ประกอบของ React

>**หมายเหตุ:**
>
>บางคนอาจจะสับสนเรื่องขององค์ประกอบกับแนวคิดที่รู้จักกันดีอย่าง "คอมโพเนนท์" เดี๋ยวเราจะมาแนะนำให้รู้จักกับคอมโพเนนท์ใน [หัวข้อถัดไป](/docs/components-and-props.html) คอมโพเนนท์หนึ่งตัวคือสิ่งที่ "สร้างมาจาก" องค์ประกอบเหล่านี้นั่นเอง และเราแนะนำให้คุณอ่านหัวข้อนี้ก่อนที่จะโดดข้ามไปในหัวข้อถัดไป

## การแสดงผลองค์ประกอบลงใน DOM {#rendering-an-element-into-the-dom}

สมมติว่ามี `<div>` อยู่ที่ไหนสักที่ในไฟล์ HTML ของคุณ:

```html
<div id="root"></div>
```

เราเรียกสิ่งนี้ว่า "รูท" โหนด DOM เพราะทุกอย่างภายในนั้นจะถูกจัดการโดย React DOM

แอปพลิเคชันที่ถูกสร้างจากแค่ React มักจะมีรูทโหนด DOM เพียงอันเดียว ถ้าคุณกำลังต้องการจะผสานรวม React เข้ากับแอปที่มีอยู่แล้ว, คุณอาจมีรูทโหนด DOM ที่แยกได้มากเท่าที่คุณต้องการ

<<<<<<< HEAD
ในการแสดงผลองค์ประกอบของ React เข้าไปในรูทโหนด DOM ต้องส่งทั้งสองอย่างไปยังฟังก์ชั่น [`ReactDOM.render()`](/docs/react-dom.html#render):

`embed:rendering-elements/render-an-element.js`

[ทดลองบน Codepen](codepen://rendering-elements/render-an-element)
=======
To render a React element, first pass the DOM element to [`ReactDOM.createRoot()`](/docs/react-dom-client.html#createroot), then pass the React element to `root.render()`:

`embed:rendering-elements/render-an-element.js`

**[Try it on CodePen](https://codepen.io/gaearon/pen/ZpvBNJ?editors=1010)**
>>>>>>> 47adefd30c46f486428d8231a68e639d62f02c9e

ผลลัพธ์คือมันจะแสดง "Hello, world" บนหน้า

## การปรับปรุงการแสดงผลขององค์ประกอบ {#updating-the-rendered-element}

องค์ประกอบของ React นั้นคือ [สิ่งที่ไม่เปลี่ยนรูป](https://en.wikipedia.org/wiki/Immutable_object) ทันทีที่คุณสร้างองค์ประกอบขึ้นมาหนึ่งตัว, คุณจะไม่สามารถเปลี่ยนลูก ๆ หรือแอตทริบิวต์ของมันได้ องค์ประกอบก็เหมือนเฟรมหนึ่งเฟรมในหนัง: มันเป็นตัวแทนของ UI ณ เวลาใดเวลาหนึ่งเท่านั้น

<<<<<<< HEAD
ด้วยความรู้ของเราจนถึงตอนนี้, ทางเดียวที่จะปรับปรุง UI ได้คือสร้างองค์ประกอบใหม่, และส่งต่อไปยังฟังก์ชั่น [`ReactDOM.render()`](/docs/react-dom.html#render)
=======
With our knowledge so far, the only way to update the UI is to create a new element, and pass it to `root.render()`.
>>>>>>> 47adefd30c46f486428d8231a68e639d62f02c9e

ลองพิจารณาตัวอย่างนาฬิกาที่กำลังเดินอยู่นี้:

`embed:rendering-elements/update-rendered-element.js`

<<<<<<< HEAD
[ทดลองบน Codepen](codepen://rendering-elements/update-rendered-element)

มันจะเรียกใช้ฟังก์ชั่น [`ReactDOM.render()`](/docs/react-dom.html#render) ทุกวินาทีจากการตอบกลับของฟังก์ชั่น [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)
=======
**[Try it on CodePen](https://codepen.io/gaearon/pen/gwoJZk?editors=1010)**

It calls [`root.render()`](/docs/react-dom.html#render) every second from a [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) callback.
>>>>>>> 47adefd30c46f486428d8231a68e639d62f02c9e

>**หมายเหตุ:**
>
<<<<<<< HEAD
>ในทางปฏิบัติ, แอป React ส่วนใหญ่จะเรียกใช้ฟังก์ชั่น [`ReactDOM.render()`](/docs/react-dom.html#render) เพียงครั้งเดียวเท่านั้น ในหัวข้อต่อไปเราจะมาเรียนรู้ว่าการห่อหุ้มโค้ดไว้ใน [สเตทฟูลคอมโพเนนท์](/docs/state-and-lifecycle.html) ทำอย่างไร
มันจะเรียกใช้ฟังก์ชั่น `ReactDOM.render()` ทุกวินาทีจากการตอบกลับของฟังก์ชั่น [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

>**หมายเหตุ:**
=======
>In practice, most React apps only call `root.render()` once. In the next sections we will learn how such code gets encapsulated into [stateful components](/docs/state-and-lifecycle.html).
>>>>>>> 47adefd30c46f486428d8231a68e639d62f02c9e
>
>ในทางปฏิบัติ, แอป React ส่วนใหญ่จะเรียกใช้ฟังก์ชั่น `ReactDOM.render()` เพียงครั้งเดียวเท่านั้น ในหัวข้อต่อไปเราจะมาเรียนรู้ว่าการห่อหุ้มโค้ดไว้ใน [สเตทฟูลคอมโพเนนท์](/docs/state-and-lifecycle.html) ทำอย่างไร
>
>เราขอแนะนำให้คุณอย่าข้ามหัวข้อเพราะว่าเนื้อหามันต่อเนื่องกัน

## React จะปรับปรุงเฉพาะสิ่งที่จำเป็นเท่านั้น {#react-only-updates-whats-necessary}

React DOM จะเปรียบเทียบองค์ประกอบและลูก ๆ กับองค์ประกอบก่อนหน้า, และทำการปรับปรุง DOM เฉพาะส่วนที่จำเป็นเพื่อให้ DOM เข้าสู่สถานะที่ต้องการ

<<<<<<< HEAD
คุณสามารถพิสูจน์โดยการตรวจสอบ [ตัวอย่างล่าสุด](codepen://rendering-elements/update-rendered-element) ด้วยเครื่องมือของเบราเซอร์:
=======
You can verify by inspecting the [last example](https://codepen.io/gaearon/pen/gwoJZk?editors=1010) with the browser tools:
>>>>>>> 47adefd30c46f486428d8231a68e639d62f02c9e

![ตัวตรวจสอบ DOM แสดงการปรับปรุงที่ละเอียด](../images/docs/granular-dom-updates.gif)

แม้ว่าเราจะสร้างองค์ประกอบเพื่ออธิบาย UI ใหม่ทั้งหมดทุกครั้งที่นาฬิกาเดิน, แต่ว่าจะมีเฉพาะโหนดข้อความที่เนื้อหามีการเปลี่ยนแปลงเท่านั้นได้รับการปรับปรุงโดย React DOM

จากประสบการณ์ของเรา, การคิดว่า UI ควรจะเป็นอย่างไรเฉพาะช่วงเวลาใดเวลาหนึ่ง แทนการคิดว่าเมื่อเวลาผ่านไปจะเปลี่ยนมันเป็นอย่างไร จะสามารถกำจัดข้อผิดพลาดได้เยอะทีเดียว
