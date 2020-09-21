---
id: tutorial
title: "แบบฝึกหัด: เริ่มต้น React"
layout: tutorial
sectionid: tutorial
permalink: tutorial/tutorial.html
redirect_from:
  - "docs/tutorial.html"
  - "docs/why-react.html"
  - "docs/tutorial-ja-JP.html"
  - "docs/tutorial-ko-KR.html"
  - "docs/tutorial-zh-CN.html"
---

แบบฝึกหัดนี้ไม่จำเป็นต้นมีพื้นฐาน React มาก่อนก็ทำได้

## ก่อนเริ่มต้นทำแบบฝึกหัด {#before-we-start-the-tutorial}

ในขณะที่ทำตามแบบฝึกหัดนี้ไป เราก็จะได้เขียนเกมเล็ก ๆ เล่นกันสนุก ๆ **แต่คุณอาจข้ามส่วนนี้ไปก็ได้เพราะคุณไม่ได้สนใจที่จะเขียนเกมนี่นา -- แต่ลองดูหน่อยก็ไม่เสียหายอะไรนะ** สิ่งที่คุณจะได้เรียนรู้ในแบบฝึกหัดนี้ถือเป็นเทคนิคขึ้นพื้นฐานที่จำเป็นสำหรับพัฒนา React แอปพลิเคชั่น และยิ่งถ้าคุณฝึกจนเชี่ยวชาญแล้วล่ะก็ จะยิ่งทำให้คุณเข้าใจ React ได้อย่างลึกซึ้งเลยทีเดียว

>เกร็ดความรู้
>
>แบบฝึกหัดนี้ออกแบบมาสำหรับคนที่ชอบ **การเรียนรู้ด้วยการลงมือทำ**. แต่ถ้าคุณชอบเรียนแบบทีละขั้นตั้งแต่เริ่มต้นเลย, เชิญลิงค์นี้เลย [คู่มือฝึกหัดทีละขั้นตอน](/docs/hello-world.html) คุณคงเห็นแล้วว่าเนื้อหาของแบบฝึกหัดนี้กับคู่มือฝึกหัดทีละขั้นตอนนั้นจะสอดคล้องซึ่งกันและกัน

แบบฝึกหัดนี้จะแบ่งออกเป็นหลาย ๆ หมวดหมู่:

* [เตรียมตัวก่อนทำแบบฝึกหัด](#setup-for-the-tutorial) จะช่วยตระเตรียมเครื่องมือและอื่น ๆ เพื่อเป็น **จุดเริ่มต้น** ให้คุณทำตามแบบฝึกหัดได้อย่างเข้าใจ
* [เนื้อหารวบยอด](#overview) จะสอน **องค์ประกอบพื้นฐาน** ของ React เช่น คอมโพเนนท์ (Component) , พร็อบ (Props), และ สเตท (State)
* [เขียนเกมจนเสร็จ](#completing-the-game) จะสอน **เทคนิคทั่วไป** ที่ใช้ในการพัฒนา React แอปพลิเคชั่น
* [เพิ่มการเดินทางข้ามเวลา](#adding-time-travel) จะทำให้คุณ **เข้าใจอย่างลึกซึ้ง** ถึงจุดเด่นที่เป็นเอกลักษณ์ของ React

คุณไม่จำเป็นต้องทำทั้งหมดให้เสร็จในรวดเดียว ลองทำไปให้เยอะที่สุดเท่าที่ทำได้ก่อน -- จะแค่หนึ่งหรือสองหมวดก็ไม่ว่ากัน.

### เรากำลังจะสร้างอะไรกัน? {#what-are-we-building}

ในแบบฝึกหัดนี้, เราจะมาเรียนรู้ถึงวิธีการสร้างเกม โอ-เอ็กซ์ (Tic-Tac-Toe) ด้วย React

คุณสามารถดูสิ่งที่เรากำลังจะสร้างนี้จาก : **[ตัวเกมที่เสร็จแล้ว](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)** ถ้าคุณเห็นโค้ด แล้วดูไม่สมเหตุสมผลเอาซะเลย หรือดูแล้วยังไม่คุ้นเคยกับโครงสร้างของไวยากรณ์ (Syntax), อย่าเพิ่งกังกลไป! เพราะจุดประสงค์ของแบบฝึกหัดนี้เพื่อช่วยให้คุณเข้าใจ React และไวยากรณ์เหล่านี้ให้มากขึ้นนั่นเอง

เราแนะนำให้คุณดูตัวเกมโอ-เอ็กซ์ ก่อนที่จะลุยกันต่อกับแบบฝึกหัดนี้, ฟีเจอร์ (Feature) นึงที่คุณจะสังเกตเห็นทันทีเลยนั่นก็คือ รายการลำดับเลขที่อยู่ฝั่งขวามือของกระดาน รายการนี้จะแสดงประวัติการเดินหมากแต่ละครั้งที่เกิดขึ้น และมันจะอัพเดทตลอดเวลา ในขณะที่ี่เกมดำเนินไป

พอคุณคุ้นเคยกับตัวเกมแล้ว ก็ปิดมันไปได้เลย ในแบบฝึกหัดนี้เราจะเริ่มจากรูปแบบง่าย ๆ กันก่อน โดยขั้นตอนต่อไปเราจะมาติดตั้งเครื่องมือที่จำเป็นกันก่อน เพื่อให้คุณได้เริ่มสร้างเกมกัน

### ข้อกำหนดเบื้องต้น {#prerequisites}

เราจะถือสมมติฐานที่ว่าคุณมีความคุ้นเคยกับ HTML และ JavaScript มาพอสมควรแล้ว, แต่ถึงแม้ว่าคุณยังไม่คุ้นเคยหรือถนัดภาษาอื่นมา คุณก็ยังสามารถทำตามเราไปได้เช่นกัน อีกอย่างเราจะถือสมมติฐานที่ว่าคุณน่าจะคุ้นเคยกับแนวคิดการเขียนโปรแกรมเบื้องต้น เช่น ฟังก์ชั่น (Function), อ็อบเจกต์ (Object), อาร์เรย์ (Array) หรือน้อยที่สุดเลยก็ คลาส (Class)

ถ้าคุณอยากจะกลับไปทบทวน JavaScript สักหน่อย, เราแนะนำให้อ่าน [คู่มือนี้](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) แจ้งให้ทราบไว้ก่อนว่าเราใช้ฟีเจอร์บางอย่างจาก ES6 (JavaScript รุ่นล่าสุด) ด้วยเช่นกัน ในแบบฝึกหัดนี้ เราใช้ [ฟังก์ชั่นลูกศร](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [คลาส](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [ตัวแปรไม่คงที่ (`let`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), และ [ตัวแปรคงที่ (`const`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) คุณสามารถใช้ [บาเบล (Babel REPL)](babel://es5-syntax-example) เพื่อตรวจสอบโค้ด ES6 ที่ถูกแปลงแล้วจะออกมาเป็นลักษณะเช่นใด

## เตรียมพร้อมสำหรับแบบฝึกหัด {#setup-for-the-tutorial}

ในการที่จะทำแบบฝึกหัดนี้จนจบสมบูรณ์คุณมี 2 ทางเลือก: คุณจะเขียนโค้ดในเบราว์เซอร์ (Browser), หรือติดตั้งชุดเครื่องมือสำหรับพัฒนาระบบบนเครื่องของคุณก็ได้

### ตัวเลือกที่ 1: เขียนโค้ดในเบราว์เซอร์ {#setup-option-1-write-code-in-the-browser}

นี่เป็นทางที่เร็วที่สุดในการเริ่มต้น!

อันดับแรก, เปิด **[โค้ดเริ่มต้น](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)** ในหน้าแท็บใหม่. แท็บใหม่ควรจะแสดงหน้ากระดานเกมโอ-เอ็กซ์ว่าง ๆ และโค้ด React แล้วเราก็จะมาเริ่มแก้โค้ดในแบบฝึกหัดนี้กัน.

คุณสามารถข้ามตัวเลือกที่ 2, แล้วไปที่หมวด [เนื้อหารวบยอด](#overview) เพื่อให้เข้าใจเนื้อหารวบยอดเกี่ยวกับ React

### ตัวเลือกที่ 2: ติดตั้งชุดเครื่องมือสำหรับพัฒนาระบบบนเครื่องของคุณ {#setup-option-2-local-development-environment}

ตัวเลือกนี้ไม่บังคับและในแบบฝึกหัดนี้ไม่จำเป็นต้องทำแบบนี้ก็ได้!

<br>

<details>

<summary><b>คำแนะนำและไม่บังคับ: โปรดใช้โปรแกรมแก้ไขข้อความ (Text Editor) ที่คุณถนัดบนเครื่องของคุณ</b></summary>

วิธีนี้จำเป็นต้องใช้เวลากับมันหน่อย แต่มันก็เปิดโอกาสให้คุณได้ทำแบบฝึกหัดนี้จนเสร็จโดยคุณก็ได้ใช้โปรแกรมที่คุณถนัดมือด้วยเช่นกัน ง่าย ๆ ก็ทำตามนี้เลย:

1. ติดตั้ง [Node.js](https://nodejs.org/en/) รุ่นล่าสุด.
2. ทำตาม [วิธีติดตั้ง Create React App](/docs/create-a-new-react-app.html#create-react-app) เพื่อสร้างโปรเจคใหม่

```bash
npx create-react-app my-app
```

3. ลบไฟล์ทั้งหมดในโฟลเดอร์ `src/` ในโปรเจคใหม่ที่เพิ่งสร้างขึ้นเมื่อครู่นี้

> หมายเหตุ:
>
>**อย่าลบโฟลเดอร์ `src` ทิ้ง, ให้ลบเฉพาะไฟล์ต้นแบบที่อยู่ข้างในเท่านั้น** เดี๋ยวเราจะสร้างไฟล์อื่น ๆ ทับลงไปในขั้นตอนต่อไป

```bash
cd my-app
cd src

# ถ้าคุณใช้ Mac หรือ Linux:
rm -f *

# หรือ, ถ้าคุณใช้ Windows:
del *

# ต่อไป, กลับไปที่โฟลเดรอ์ของโปรเจค
cd ..
```

4. สร้างไฟล์ใหม่ชื่อ `index.css` ในโฟลเดอร์ `src/` พร้อมด้วย [โค้ด CSS นี้](https://codepen.io/gaearon/pen/oWWQNa?editors=0100)

5. สร้างไฟล์ใหม่ชื่อ `index.js` ในโฟลเดอร์ `src/` พร้อมด้วย [โค้ด JS นี้](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)

6. เพิ่มโค้ด 3 บรรทัดนี้เข้าไปในส่วนบนสุดของไฟล์ `index.js` ในโฟลเดอร์ `src/`:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

ตอนนี้ถ้าคุณเรียกใช้คำสั่ง `npm start` ในโฟลเดอร์ของโปรเจคและเปิดเบราว์เซอร์แล้วไปที่ `http://localhost:3000`, คุณก็จะเห็นกระดานเกมโอ-เอ็กซ์ว่าง ๆ นั่นเอง

เราแนะนำให้ทำตาม [คำแนะนำนี้](https://babeljs.io/docs/editors/) เพื่อกำหนดการเน้นไวยากรณ์ (Syntax Highlighting) สำหรับโปรแกรมแก้ไขข้อความของคุณ

</details>

### ช่วยด้วย, ติด!, ไปต่อไม่ได้แล้ว! {#help-im-stuck}

ถ้าคุณติดหรือไปต่อไม่ได้แล้ว, ลองไปค้นดู [ทรัพยากรสำหรับช่วยเหลือผู้อื่นจากชุมชนผู้ใช้ React](/community/support.html), โดยเฉพาะอย่างยิ่งถ้าคุณต้องการความช่วยเหลืออย่างเร่งด่วน [กลุ่มพูดคุย Reactiflux](https://discord.gg/0ZcbPKXt5bZjGY5n) ก็เป็นทางเลือกที่ยอดเยี่ยมเช่นกัน, ถ้าคุณยังไม่ได้รับการช่วยเหลือหรือคำตอบใด ๆ, หรือถ้าคุณยังติดตรงไหนและไปต่อไม่ได้อยู่, กรุณายื่นปัญหานั้นใน Github แล้วเราจะพยายามเต็มที่เพื่อช่วยคุณเอง

## เนื้อหารวบยอด {#overview}

ตอนนี้เราก็เตรียมตัวและติดตั้งทุกอย่างพร้อมแล้ว, เราก็จะมาเริ่มที่เนื้อหารวบยอดของ React กัน!

### React คืออะไร? {#what-is-react}

React เป็น JavaScript ไลบรารี่สำหรับสร้าง UI ที่มีโครงสร้างอย่างยืดหยุ่นและมีประสิทธิภาพ (Declarative, Efficient, Flexible) ทำให้คุณสามารถสร้าง UI ที่มีความซับซ้อนได้ โดยการประกอบโค้ดหลาย ๆ ส่วนที่แยกการทำงานกันออกอย่างชัดเจนหรือแม้กระทั่ง UI ชิ้นเล็ก ๆ ที่คุณสร้างแยกไว้เข้าด้วยกัน ซึ่งในที่นี้เรียกว่า คอมโพเนนท์ (Component)

React มีคอมโนเนนท์ต่าง ๆ อยู่สอง-สามแบบ, แต่เราจะเริ่มต้นกันที่ การสร้างคลาสย่อยจาก `React.Component` :

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>รายการซื้อสินค้าสำหรับ {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// ตัวอย่างการใช้งาน: <ShoppingList name="Mark" />
```

เดี๋ยวเราจะได้สนุกโครงสร้างที่คล้าย ๆ XML กัน เราใช้คอมโนเนนท์เพื่อที่บอก React ในสิ่งที่เราต้องการบนหน้าจอ เมื่อข้อมูลของเรามีการเปลี่ยนแปลง React จะทำการปรับปรุงประสิทธิภาพและแสดงผลคอมโพเนนท์ของเราใหม่อีกครั้ง (Re-render)

ณ ที่นี้, `ShoppingList` เป็น **React คลาสคอมโพเนนท์**, หรือ **React คอมโพเนนท์** คอมโพเนนท์จะรับคุณสมบัติซึ่งในที่นี้เราจะเรียกว่า `props` (ย่อมาจาก "properties"), และคืนโครงสร้างของสิ่งที่เราต้องการจะแสดงผลด้วยวิธีการ `render`

วิธีการ `render` นั้นจะคืน *รูปร่างลักษณะ (Description)* ของสิ่งที่คุณต้องการจะเห็นผลหน้าจอ แล้ว React จะนำรูปร่างลักษณะที่ได้นั้นไปแสดงผลลัพธ์ออกมา, หรืออีกนัยหนึ่งวิธีการ `render` นั้นเรียกได้ว่าเป็นการคืน **ส่วนประกอบ (React element)** ของ React, ซึ่งเป็นรูปร่างลักษณะที่นำหนักเบาต่อการสร้างคอมโพเนนท์ นักพัฒนาส่วนใหญ่ใช้ไวยากรณ์พิเศษที่เรียกว่า "JSX" ซึ่งเป็นส่วนที่ทำให้สร้างโครงสร้างแบบนี้ได้อย่างง่าย ยกตัวอย่างเช่นตัว `<div />` จะถูกแปลงไปเป็น `React.createElement('div')` ดังนั้นตัวอย่างข้างบนก็จะเทียบเท่ากับ:

```javascript
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... ลูกของ h1 ... */),
  React.createElement('ul', /* ... ลูกของ ul ... */)
);
```

[ดูฉบับเต็ม](babel://tutorial-expanded-version)

ถ้าคุณอยากเรียนรู้เกี่ยวกับ `createElement()` มากกว่านี้ มีอธิบายใน [API อ้างอิงนี้](/docs/react-api.html#createelement) แต่เราจะไม่ใช้มันในแบบฝึกหัดนี้ เพราะเราจะยังคงใช้ JSX ต่อไป

JSX นั้นมากับพลังความสามารถของ JavaScript คุณสามารถใส่คำสั่งหรือ *อะไรก็ได้ (Any)* ที่เป็น JavaScript ใน JSX ซึ่งส่วนประกอบของ React แต่ละอันนั้นก็คือ JavaScript ออปเจคต์ ที่คุณสามารถเก็บไว้ในตัวแปรและส่งต่อไปที่อื่น ๆ ได้ในโปรแกรมของคุณ

คอมโพเนนท์ `ShoppingList` ข้างบนนั้นทำได้เพียงแค่สร้าง DOM พวกที่เป็น `<div />` และ `<li />`. แต่คุณก็สามารถสร้างและประกอบมันได้เช่นกัน ตัวอย่างเช่น เราสามารถอ้างถึงตัวรายการซื้อสินค้าทั้งหมด ด้วยการเขียนโค้ดแค่ `<ShoppingList />` React คอมโนเนนท์แต่ละตัวนั้นจะแยกการทำงานและห่อหุ้มความสามารถของตัวเองไว้อย่างชัดเจน; ซึ่งด้วยเหตุผลนี้ทำให้เราสามารถที่จะสร้าง UI ที่ซับซ้อนได้จากคอมโพเนนท์ที่เรียบง่ายเหล่านี้นั่นเอง

<<<<<<< HEAD
## ตรวจสอบโค้ดเริ่มต้น {#inspecting-the-starter-code}
=======
### Inspecting the Starter Code {#inspecting-the-starter-code}
>>>>>>> 1becaff62ae228d909b83ef6d08f48c01660300f

ถ้าคุณกำลังที่จะทำแบบฝึกหัดนี้ใน **เบราเซอร์ของคุณ** เปิด **[โค้ดเริ่มต้น](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)** นี้ในแท็ปใหม่ ถ้าคุณกำลังที่จะทำแบบฝึกหัดนี้ **จากเครื่องของคุณเอง** ให้ไปที่โฟลเดอร์โปรเจคของคุณ แล้วไปที่ `src/index.js` แทน (ซึ่งคุณได้มีการแตะไฟล์นี้ไปแล้วนิดหน่อยตอนที่เราทำการ [ติดตั้ง](#setup-option-2-local-development-environment) กันไป)

โค้ดเริ่มต้นนี้คือฐานของสิ่งที่เรากำลังจะสร้าง เราได้เตรียม CSS ไว้ให้แล้ว ดังนั้นคุณจะพุ่งความสนใจไปที่การเรียนรู้ React และเขียนเกมโอ-เอ็กซ์อย่างเดียว

จากในโค้ด คุณจะสังเกตได้ว่าเรามีคอมโพเนนท์อยู่ 3 ตัว:

* Square
* Board
* Game

คอมโพเนนท์ Square นั้นจะทำหน้าที่แค่สร้าง `<button>` อย่างเดียวและคอมโพเนนท์ Board จะทำหน้าที่สร้างตาราง 9 ช่อง. คอมโพเนนท์ Game จะสร้างกระดานที่มีการใส่ค่าตั้งต้นลงไปซึ่งเราจะทำการแก้ไขทีหลัง ซึ่งตอนนี้ยังไม่มีคอมโพเนนท์ไหนที่ตอบโต้ได้

### ส่งข้อมูลผ่าน Props {#passing-data-through-props}

มาทำให้เท้าเปียกกันหน่อย, เดี๋ยวเราจะลองส่งข้อมูลบางอย่างจากคอมโพเนนท์ Board ของเราต่อลงไปหาคอมโพเนนท์ Square กัน

ในขณะที่ทำแบบฝึกหัดนี้ไป เราขอแนะนำให้เขียนโค้ดเองด้วยมือแทนการ คัดลอก/วาง (copy/paste) ซึ่งจะทำให้คุณพัฒนาความจำของกล้ามเนื้อ (Muscle memory) และความเข้าใจที่มากขึ้น

ในฟังก์ชั่น `renderSquare` ของคอมโพเนนท์ Board, เปลี่ยนโค้ดเพื่อส่งพร็อบชื่อว่า `value` บนคอมโพเนนท์ Square:

```js{3}
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

เปลี่ยนฟังก์ชั่น `render` ของคอมโพเนนท์ Square เพื่อแสดงค่านั้น โดยการแทนที่ส่วน `{/* TODO */}` ด้วยโค้ด `{this.props.value}` นี้:

```js{5}
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

ก่อน:

![React Devtools](../images/tutorial/tictac-empty.png)

หลัง: คุณควรจะเห็นตัวเลขในแต่ละช่อง

![React Devtools](../images/tutorial/tictac-numbers.png)

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/aWWQOG?editors=0010)**

ขอแสดงความยินดีด้วย! คุณเพิ่งทำการ "ส่งค่าผ่านทางพร็อบ" จากคอมโพเนนท์แม่ (Board)สู่คอมโพเนนท์ลูก (Square) การส่งค่าผ่านทางพร็อบ นั้นคือรูปแบบการไหลของข้อมูลในแอปพลิเคชั่นที่สร้างด้วย React, ...จากแม่สู่ลูก.

### สร้างคอมโพเนนท์ที่ตอบโต้ได้ {#making-an-interactive-component}

ใส่ "X" ในคอมโพเนนท์ Square ตอนเราคลิก
อันดับแรก, เปลี่ยนส่วนของแท็ก button ที่คืนค่ามาตัวเก่า ในฟังก์ชั่น `render()` ของคอมโพเนนท์ Square ด้วยนี่:

```javascript{4}
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
```

ตอนนี้ถ้าคุณคลิกบนคอมโพเนนท์ Square, คุณควรจะเห็นหน้าจอฟ้องขึ้นมาในเบราเซอร์ของคุณ

>หมายเหตุ
>
>เพื่อช่วยให้คุณไม่ต้องพิมพ์เยอะและหลีกเลี่ยง [ความสับสนของการใช้ `this`](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/), ตรงนี้และต่อไป เราจะใช้ [ฟังก์ชั่นลูกศร](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) สำหรับตัวรับผลลัพธ์ (Event handlers) กัน:
>
>```javascript{4}
>class Square extends React.Component {
>  render() {
>    return (
>      <button className="square" onClick={() => alert('click')}>
>        {this.props.value}
>      </button>
>    );
>  }
>}
>```
>
>สังเกตวิธีที่เขียน `onClick={() => alert('click')}`, เรากำลังทำการส่งwe're passing *ฟังก์ชั่น* เป็นพร็อบให้กับ `onClick` แล้ว React จะเรียกฟังก์ชั่นนี้เท่านั้น หลังจากการคลิกแต่ละครั้ง การลืม `() =>` และเขียน `onClick={alert('click')}` เป็นข้อผิดพลาดทั่วไป และจะทำให้เห็นหน้าจอฟ้องขึ้นมาทุกครั้งที่มีเรนเดอร์ใหม่

ในขั้นต่อไป, เราต้องการให้คอมโพเนนท์ Square "จำ" ว่ามันได้ถูกคลิกไปแล้ว, และใส่ "X" ลงไป. เพื่อ "จำ" สิ่งต่าง ๆ, คอมโพเนนท์จะใช้ **สเตท (State)**.

คอมโพเนนท์ของ React components นั้นจะมีสเตทด้วยการกำหนด `this.state` ใน `constructors` และตัว `this.state` นั้นควรถือว่าเป็นของส่วนตัว (Private) ในแต่ละคอมโพเนนท์เมื่อถูกกำหนัดขึ้นมา เดี๋ยวเราจะมาเก็บค่าปัจจุบันของคอมโพเนนท์ Square ใน `this.state`, และเปลี่ยนมันเมื่อถูกคลิก

อันดับแรก, เราจะเพิ่ม constructor เข้าไปในคลาสและกำหนดสเตทเริ่มต้น:

```javascript{2-7}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

>หมายเหตุ
>
>ใน [คลาสของ JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), เมื่อนิยาม constructor ของคลาสย่อย คุณจำเป็นต้องเรียก `super` ก่อนเสมอ, คอมโพเนนท์ของ React ทุก ๆ ตัวที่เป็นคลาสและมี `constructor` ก็ควรจะเริ่มต้นด้วยการเรียก`super(props)` เช่นกัน

ถึงตรงนี้เราจะมาเปลี่ยนฟังก์ชั่น `render` ของคอมโพเนนท์ Square เพื่อที่จะแสดงค่าของสเตทปัจจุบันเมื่อมีการคลิกไปแล้ว:

* แทนที่ `this.props.value` ด้วย `this.state.value` ในแท็ก `<button>`
* แทนที่ `onClick={...}` ด้วย `onClick={() => this.setState({value: 'X'})}`
* แยกพร็อบ `className` และ `onClick` ให้อยู่คนละบรรทัดเพื่อให้ง่ายต่อการอ่าน

หลังจากการเปลี่ยนแปลงครั้งนี้, แท็ก `<button>` ที่ถูกคืนมาจากฟังก์ชั่น `render` ของคอมโพเนนท์ Square จะมีหน้าตาแบบนี้:

```javascript{12-13,15}
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

ด้วยการเรียก `this.setState` จาก `onClick` ในฟังก์ชั่น `render` ของคอมโพเนนท์ Square, เราบอก React ให้ทำการเรนเดอร์ Square ใหม่ ตอนไหนก็ตามที่มีการคลิก `<button>` หลังจากที่มีการอัพเดท, ค่า `this.state.value` ของคอมโพเนนท์ Square จะกลายเป็น `'X'`, ดังนั้นเราจะเห็น `X` บนกระดานเกม ดังนั้นถ้าคุณคลิกบนช่องไหนก็ตาม, ตัว `X` ก็ควรจะแสดงขึ้นมา

เมื่อคุณเรียก `setState` ในคอมโพเนนท์, React จะทำการอัพเดทคอมโพเนนท์ลูกที่อยู่ข้างในเช่นกัน

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/VbbVLg?editors=0010)**

### เครื่องมือนักพัฒนา {#developer-tools}

ส่วนเสริม React Devtools สำหรับ [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) และ [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) ช่วยให้คุณตรวจสอบคอมโพเนนท์ React ผ่านเบราเซอร์ของคุณได้

<img src="../images/tutorial/devtools.png" alt="React Devtools" style="max-width: 100%">

ตัว React DevTools ช่วยให้คุณตรวจสอบพร็อบและสเตทของคอมโพเนนท์ต่าง ๆ ได้

หลังจากติดตั้ง React DevTools, คุณสามารถคลิกขวาที่ไหนก็ได้บนหน้าเว็บ, คลิก "Inspect" เพื่อเปิดส่วนของเครื่องมือนักพัฒนาขึ้นมา, และแท็ปของ React ("* Components" และ "* Profiler") จะปรากฎอยู่เป็นส่วนสุดท้ายทางขวามือสุด ใช้ "* Components" เพื่อตรวจสอบ component tree

**อย่างไรก็ตาม, มันก็มีขั้นตอนเพิ่มขึ้นเล็กน้อยถ้าจะทำให้มันทำการได้กับ CodePen:**

1. ล็อกอินหรือลงทะเบียนและทำการยืนยันอีเมล์ (จำเป็นเพื่อป้องกันสแปม)
2. คลิกที่ปุ่ม "Fork"
3. คลิก "Change View" แล้วเลือก "Debug mode"
4. ในหน้าแท็ปใหม่ที่เปิดขึ้น, ในส่วนของเครื่องมือควรจะเห็นแท็ปของ React

## จบเกม {#completing-the-game}

ตอนนี้เรามีส่วนที่เป็นฐานสำหรับเกมโอ-เอ็กซ์แล้ว เพื่อที่จะเขียนเกมให้เสร็จ, เราจำเป็นต้องมีการสลับการวางตำแหน่งของ "X" และ "O" บนกระดาน และเรายังจำเป็นต้องหาวิธีการที่จะกำหนดผู้ชนะ

### ขยับสเตทขึ้น {#lifting-state-up}

ปัจจุบัน, คอมโพเนนท์ Square แต่ละตัวเก็บสเตทของเกมไว้ในตัวมันเอง ดังนั้นเพื่อที่จะหาผู้ชนะ เราจำเป็นที่จะต้องเก็บค่าของตารางทั้ง 9 ช่องไว้ด้วยกันที่เดียว

เราอาจคิดว่าแค่ให้คอมโพเนนท์ Board ถามสเตทจากคอมโพเนนท์ Square แต่ละตัวก็ได้นี่นา ถึงแม้ว่าจะทำแบบนั้นได้ใน React, แต่เราไม่อยากให้ทำเพราะว่าจะทำให้โค้ดเข้าใจยาก, เสี่ยงต่อการเกิดบั๊ก, และยากต่อการปรับแก้ไข ดังนั้นแทนที่จะเก็บสเตทของเกมไว้กับคอมโพเนนท์ Square แต่ละตัว ทางที่ดีที่สุดคือให้เก็บสเตทของเกมไว้ที่คอมโพเนนท์แม่ของคอมโพเนนท์ Board แทน ซึ่งคอมโพเนนท์ Board สามารถที่จะบอกให้คอมโพเนนท์ Square แต่ละตัวว่าต้องแสดงค่าอะไรโดยการส่งค่าผ่านพร็อบ, [เหมือนกับที่เราเคยทำตอนส่งค่าตัวเลขใหกับคอมโพเนนท์ Square แต่ละตัวนั่นเอง](#passing-data-through-props).

**เพื่อที่จะเก็บข้อมูลจากคอมโพเนนท์ลูกหลายตัว, หรือการมีคอมโพเนนท์ลูก 2 ตัวติดต่อสื่อสารซึ่งกันและกัน, คุณจำเป็นต้องประกาศการใช้สเตทร่วมกันในคอมโพเนนท์แม่แทน ตัวคอมโพเนนท์แม่สามารถส่งสเตทกลับลงไปหาคอมโพเนนท์ลูกโดยการใช้พร็อบ; นี่จะทำให้คอมโพเนนท์ลูกมีค่าเดียวกันพร้อม ๆ กับคอมโพเนนท์แม่ด้วย**

การขยับสเตทขึ้นไปไว้ที่คอมโพเนนท์แม่เป็นเรื่องปกติเมื่อมีการปรับแก้ไขคอมโพเนนท์ใน React -- งั้นเราก็ใช้โอกาสนี้มาลองกันเลย

เพิ่ม constructor ใส่ในคอมโพเนนท์ Board และตั้งค่าสเตทเริ่มต้นด้วยการประกาศตัวแปรอาเรย์มีค่า null อยู่ 9 ตัวซึ่งตรงกับ 9 ตารางนั่นเอง:

```javascript{2-7}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }
```

เมื่อเราเติมค่าลงไปในตารางทีหลัง ค่าของอาเรย์ `this.state.squares` จะเป็นแบบนี้:

```javascript
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
```

ปัจจุบันฟังก์ชั่น `renderSquare` ของคอมโพเนนท์ Board เป็นแบบนี้:

```javascript
  renderSquare(i) {
    return <Square value={i} />;
  }
```

ก่อนหน้านี้, เรา [ส่งพร็อบ `value` ผ่านลงไป](#passing-data-through-props) จากคอมโพเนนท์ Board เพื่อแสดงตัวเลขจาก 0 ถึง 8 ในทุกคอมโพเนนท์ Square ในขั้นตอนก่อนหน้านี้, เราแทนที่ตัวเลขเหล่านั้นด้วย "X" [โดยคอมโพเนนท์ Square เก็บไว้ในสเตทของตัวเอง](#making-an-interactive-component) ซึ่งทำให้ตอนนี้คอมโพเนนท์ Square ไม่สนใจพร็อบ `value` จากคอมโพเนนท์ Board ที่ส่งผ่านมาหาตัวมัน

ตอนนี้เราก็จะใช้วิธีการส่งพร็อบอีกครั้ง เราจะแก้ไขให้คอมโพเนนท์ Board แต่ละตัวได้รู้ว่าค่าปัจจุบันของตัวมันเองเป็นค่าไหน (`'X'`, `'O'`, หรือ `null`) ซึ่งเราได้ประกาศตัวแปรอาเรย์ `squares` ไปแล้วใน constructor ของคอมโพเนนท์ Board, และเราจะมาแก้ไขฟังก์ชั่น `renderSquare` ของคอมโพเนนท์ Board ให้อ่านค่าจากตรงนั้น:

```javascript{2}
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
```

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/gWWQPY?editors=0010)**

ตอนนี้คอมโพเนนท์ Square แต่ละตัวจะรับพร็อบ `value` ซึ่งจะเป็นค่า `'X'`, `'O'`, หรือ `null` สำหรับตารางเปล่า

ต่อไป, เราต้องเปลี่ยนว่าจะให้เกิดอะไรขึ้นเมื่อคอมโพเนนท์ Square ถูกคลิก ตอนนี้คอมโพเนนท์ Board เก็บค่าว่าตารางไหนถูกใส่ค่าลงไปแล้ว ที่นี้เราต้องหาทางทำให้คอมโพเนนท์ Square อัพเดทค่าในสเตทของคอมโพเนนท์ Board  เนื่องจากสเตทจัดเป็นค่าเฉพาะภายในคอมโพเนนท์ที่มันถูกประกาศขึ้น, ดังนั้นเราจึงไม่สามารถอัพเดทสเตทของคอมโพเนนท์ Board ได้โดยตรงจากคอมโพเนนท์ Square

ดังนั้นเราจะต้องส่งพร็อบที่เป็นฟังก์ชั่นจากคอมโพเนนท์ Board ลงไปหาคอมโพเนนท์ Square แทน, และเราจะให้คอมโพเนนท์ Square เรียกใช้ฟังก์ชั่นนั้นเมื่อตัวมันถูกคลิก เราจะปรับเปลี่ยนฟังก์ชั่น `renderSquare` ของคอมโพเนนท์ Board ให้เป็นดังนี้:

```javascript{5}
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```

>หมายเหตุ
>
>เราแยกโค้ดให้เป็นหลายบรรทัดเพื่อให้อ่านง่าย, และใส่วงเล็บเข้าไปเพื่อให้ JavaScript จะได้ไม่ต้องใส่เครื่องหมายอัฒภาค (Semicolon) ตามหลัง `return` และทำให้โค้ดพัง

ตอนนี้เราส่งพร็อบจากคอมโพเนนท์ Board ไปหาคอมโพเนนท์ Square อยู่ 2 ตัวนั่นคือ: `value` และ `onClick`. เจ้าตัวพร็อบ `onClick` เป็นฟังก์ชั่นที่คอมโพเนนท์ Square สามารถเรียกใช้ได้เมื่อถูกคลิก แล้วเราก็จะมาทำการปรับเปลี่ยนคอมโพเนนท์ Square ดังต่อไปนี้:

* แทนที่ `this.state.value` ด้วย `this.props.value` ในฟังก์ชั่น `render` ของคอมโพเนนท์ Square
* แทนที่ `this.setState()` ด้วย `this.props.onClick()` ในฟังก์ชั่น `render` ของคอมโพเนนท์ Square
* ลบ `constructor` จากคอมโพเนนท์ Square เพราะมันไม่จำเป็นต้องเก็บสเตทของเกมในตัวมันเองอีกต่อไป

หลังจากที่เราได้ทำตามขั้นตอนข้างบนไปแล้ว, คอมโพเนนท์ Square ควรจะเป็นแบบนี้:

```javascript{1,2,6,8}
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```

เมื่อคอมโพเนนท์ Square ถูกคลิก, พร็อบ `onClick` ที่ถูกส่งมาจากคอมโพเนนท์ Board จะถูกเรียกใช้ และนี่คือขั้นตอนที่มันเกิดขึ้น:

1. พร็อบ `onClick` ที่อยู่ใน DOM ของคอมโพเนนท์ `<button>` บอก React ตั้งค่ารอรับการกดปุ่มคลิก
2. เมื่อปุ่มถูกคลิก, React จะเรียกใช้ `onClick` ที่ถูกประกาศไว้ในฟังก์ชั่น `render()` ของคอมโพเนนท์ Square
3. ทำให้เกิดการเรียกใช้ `this.props.onClick()` พร็อบ `onClick` ของคอมโพเนนท์ Square ที่ถูกระบุมาจากคอมโพเนนท์ Board
4. เนื่องจากคอมโพเนนท์ Board ได้ส่ง `onClick={() => this.handleClick(i)}` ไปหาคอมโพเนนท์ Square, ดังนั้นคอมโพเนนท์ Square จึงเรียกใช้ `this.handleClick(i)` เมื่อมันถูกคลิก
5. เรายังไม่ได้ประกาศฟังก์ชั่น `handleClick()` กันเลย, ดังนั้นโค้ดของเราเลยพัง ถ้าคุณลองคลิกที่ช่องตารางตอนนี้, คุณควรจะเห็นหน้าจอเออเรอร์สีแดงบอกประมาณว่า "this.handleClick is not a function".

>หมายเหตุ
>
>ตัว DOM `onClick` ที่เป็นคุณสมบัติของ `<button>` นั้นมีความหมายพิเศษกับ React เพราะว่ามันเป็นคอมโพเนนท์ที่มีอยู่แล้ว สำหรับคอมโพเนนท์ที่ถูกสร้างขึ้นอย่าง Square, ขึ้นอยู่กับคุณว่าจะตั้งชื่อยังไง เราจะตั้งชื่ออะไรก็ได้ให้กับพร็อบ `onClick` ของคอมโพเนนท์ Square หรือฟังก์ชั่น `handleClick` ของคอมโพเนนท์ Board, และโค้ดก็ยังทำงานเหมือนเดิม ใน React, มันง่ายและชัดเจนที่จะใช้ `on[Event]` เป็นชื่อสำหรับพร็อบซึ่งมันแสดงให้เห็นถึงสิ่งที่จะเกิดขึ้น `handle[Event]` สำหรับฟังก์ชั่นซึ่งรอรับการกระทำสักอย่าง

เมื่อเราลองคลิกที่คอมโพเนนท์ Square สักตัว, เราควรจะเห็นเออเรอร์เพราะว่าเรายังไม่ได้ประกาศฟังก์ชั่น `handleClick` เลย ดังนั้นเราจะมาใส่ฟังก์ชั่น `handleClick` ในคอมโพเนนท์ Board กัน:

```javascript{9-13}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/ybbQJX?editors=0010)**

หลังจากการเปลี่ยนแปลงเหล่านี้, เราก็ยังคงสามารถที่จะคลิกบนคอมโพเนนท์ Square เพื่อเติมค่าในตารางได้เหมือนเดิม, เหมือนที่เคยทำได้มาก่อน อย่างไรก็ตาม, ตอนนี้สเตทถูกเก็บไว้ที่คอมโพเนนท์ Board แทนที่จะแยกเก็บไว้ที่คอมโพเนนท์ Square แต่ละตัว ดังนั้นเมื่อสเตทของคอมโพเนนท์ Board มีการเปลี่ยนแปลง, คอมโพเนนท์ Square ทุกตัวก็จะทำการ `re-render` อัตโนมัติ การเก็บสเตทของตารางทุกช่องไว้ที่คอมโพเนนท์ Board จะทำให้เราสามารถหาผู้ชนะได้ในอนาคต

เนื่องจากคอมโพเนนท์ Square ไม่จำเป็นต้องเก็บสเตทอีกต่อไป, ตัวคอมโพเนนท์ Square รับค่าจากคอมโพเนนท์ Board และสื่อสารกลับไปหาคอมโพเนนท์ Board เมื่อตัวมันถูกคลิก ตามนิยามของ React, ตอนนี้คอมโพเนนท์ Square ถูกเรียกว่า **คอมโพเนนท์ที่ถูกควบคุม** เพราะว่าคอมโพเนนท์ Board เป็นตัวควบคุมพวกมันถุกตัว

สังเกตในฟังก์ชั่น `handleClick`, เราเรียกใช้ `.slice()` เพื่อที่จะสร้างสำเนาของอาเรย์ `squares` เพื่อทำการแก้ไขค่าแทนที่เราจะแก้ค่าที่มีอยู่แล้วแทน เดี๋ยวเราจะมาอธิบายให้ฟังว่าทำไมเราต้องสร้างสำเนาของอาเรย์ `squares` ในหัวข้อต่อไป

### ทำไม การไม่เปลี่ยนรูป (Immutability) จึงมีความสำคัญ {#why-immutability-is-important}

ในโค้ดตัวอย่างก่อนหน้านี้, เราแนะนำให้คุณใช้ `.slice()` เพื่อสร้างสำเนาของอาเรย์ `squares` แทนที่จะไปแก้ไขข้อมูลที่มีอยู่ในอาเรย์นั้นตรง ๆ ตอนนี้เราจะพูดถึง การไม่เปลี่ยนรูป (immutability) และทำไมจึงเป็นเรื่องสำคัญที่ต้องเรียนรู้

วิธีการเปลี่ยนแปลงข้อมูลนั้น โดยทั่วไปจะมีอยู่ 2 วิธีด้วยกัน วิธีการแรก คือ *การเปลี่ยนรูป (mutate)* โดยการเปลี่ยนแปลงค่าของข้อมูลโดยตรง วิธีการที่สอง คือ การแทนที่ข้อมูลด้วยสำเนาใหม่ซึ่งมีการเปลี่ยนแปลงเฉพาะส่วนที่ต้องการ

#### การเปลี่ยนแปลงข้อมูลโดย วิธีการเปลี่ยนรูป {#data-change-with-mutation}
```javascript
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// ตอนนี้ตัวแปร player จะมีค่าเป็น {score: 2, name: 'Jeff'}
```

#### การเปลี่ยนแปลงข้อมูลโดย ไม่ใช้วิธีการเปลี่ยนรูป{#data-change-without-mutation}
```javascript
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// ตอนนี้ตัวแปร player จะไม่มีการเปลี่ยนแปลง, แต่ตัวแปร newPlayer จะมีค่าเป็น {score: 2, name: 'Jeff'}

// หรือถ้าคุณใช้วิธีการแตกไวยากรณ์ (Spread syntax), คุณสามารถเขียนแบบนี้ได้:
// var newPlayer = {...player, score: 2};
```

สุดท้ายผลลัพธ์ที่ได้ก็เหมือนกันแต่โดยการที่ไม่ใช้วิธี การเปลี่ยนรูป (หรือเปลี่ยนแปลงข้อมูลพื้นฐาน) โดยตรง, เราได้ประโยชน์หลายประการดังที่อธิบายไว้ด้างล่าง

#### ฟีเจอร์ที่ซับซ้อนกลายเป็นเรื่องง่าย {#complex-features-become-simple}

การไม่เปลี่ยนรูป ทำให้ฟีเจอร์ที่ซับซ้อนกลายเป็นเรื่องที่ทำได้ง่ายมากขึ้น ในช่วงท้าย ๆ ของแบบฝึกหัดนี้, เราจะมาสร้าง "การเดินทางข้ามเวลา" กัน ซึ่งจะเป็นฟีเจอร์ที่ทำให้เราได้เห็นประวัติการเดินหมากเกมโอ-เอ็กซ์ของเรา และ "โดดกลับ" ไปที่การเดินหมากครั้งก่อนหน้านั้น ฟังก์ชั่นนี้ไม่เฉพาะสำหรับเกมเท่านั้น -- แต่ความสามารถในการที่สามารถ ย้อนกลับ และ ทำซ้ำ ถือว่าเป็นความต้องการโดยทั่วไปในแอปพลิเคชั่นอื่น ๆ ด้วย ด้วยการหลีกเลี่ยงการเปลี่ยนแปลงข้อมูลโดยตรงทำให้เราสามารถเก็บข้อมูลของเกมครั้งก่อน ๆ ได้อย่างครบถ้วน, และนำกลับมาใช้ได้ใหม่ภายหลัง

#### การตรวจจับการเปลี่ยนแปลง {#detecting-changes}

เป็นเรื่องที่ยากมากในการตรวจจับการเปลี่ยนแปลงในออปเจคที่สามารถเปลี่ยนแปลงได้ เพราะว่ามันมีการแก้ไขตรง ๆ การตรวจจับแบบนี้ต้องให้ออปเจคนั้นเปรียบเทียบตัวมันเองกับตัวมันก่อนที่ยังไม่ถูกเปลี่ยนและต้องสำรวจโครงสร้างออปเจคทั้งหมดด้วย

การตรวจจับการเปลี่ยนแปลงในออปเจคที่ไม่เปลี่ยนรูปถือว่าทำได้ง่ายกว่า ถ้าออปเจคตัวใหม่ที่ใช้เปรียบเทียบแตกต่างจากตัวก่อนหน้านี้, นั่นถือว่ามีการเปลี่ยนแปลงเกิดขึ้น

#### พิจารณาว่าเมื่อใดที่จะ Re-Render ใน React {#determining-when-to-re-render-in-react}

<<<<<<< HEAD
ประโยชน์หลัก ๆ ของ การไม่เปลี่ยนรูป คือช่วยให้คุณสร้าง _คอมโพเนนท์บริสุทธิ์ (Pure components)_ ใน React ข้อมูลที่ไม่เปลี่ยนรูปสามารถระบุได้อย่างง่ายดายว่ามีการเปลี่ยนแปลงใดเกิดขึ้นบ้างซึ่งช่วยในการพิจารณาว่าเมื่อใดที่ต้อง re-rendering
=======
The main benefit of immutability is that it helps you build _pure components_ in React. Immutable data can easily determine if changes have been made, which helps to determine when a component requires re-rendering.
>>>>>>> 1becaff62ae228d909b83ef6d08f48c01660300f

คุณสามารถเรียนรู้เพิ่มเติมเกี่ยวกับ `shouldComponentUpdate()` และวิธีการสร้าง *คอมโพเนนท์บริสุทธิ์ (Pure components)* โดยการอ่าน [การปรับปรุงประสิทธิภาพ](/docs/optimizing-performance.html#examples)

### คอมโพเนนท์แบบฟังก์ชั่น {#function-components}

ตอนนี้เราจะเปลี่ยนคอมโพเนนท์ Square ให้เป็น **คอมโพเนนท์แบบฟังก์ชั่น** กัน

ใน React, **คอมโพเนนท์แบบฟังก์ชั่น** เป็นวิธีที่ง่ายกว่าในการเขียนคอมโพเนนท์เพราะมันมีเพียงแค่ฟังก์ชั่น `render`  และไม่ต้องเขียนสเตทเอง แทนที่จะสร้างเป็นคลาสซึ่งขยาย (Extends) ต่อจาก `React.Component`, เราสามารถเขียนฟังก์ชั่นที่รอรับ `props` และคืนสิ่งที่ควรจะแสดง คอมโพเนนท์แบบฟังก์ชั่นนั้นน่าเบื่อน้อยกว่าการเขียนคลาส, และหลาย ๆ คอมโพเนนท์ก็ใช้วิธีการแบบนี้ได้เช่นกัน

แทนที่คอมโพเนนท์ Square ด้วยฟังก์ชั่นนี้:

```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

เราได้เปลี่ยน `this.props` ไปเป็น `props` ในทั้งสองที่ที่ปรากฎอยู่

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/QvvJOv?editors=0010)**

>หมายเหตุ
>
>เมื่อเราแก้คอมโพเนนท์ Square ให้เป็นคอมโพเนนท์แบบฟังก์ชั่น, เราก็เปลี่ยน `onClick={() => this.props.onClick()}` ให้สั้นลงเป็น `onClick={props.onClick}` เช่นกัน (สังเกตว่าเราจะไม่ใส่วงเล็บไว้ *ทั้งสองข้าง*)

### ผลัดกันเดิน {#taking-turns}

ตอนนี้เราจะมาแก้ไขข้อบกพร่องที่เห็นได้ชัดเจนในเกมโอ-เอ็กซ์ของเรา นั่นคือ: การที่ไม่สามารถทำเครื่องหมาย "O" บนกระดานได้

เราจะให้ "X" เป็นค่าเริ่มต้นในการเดินครั้งแรก เราสามารถตั้งค่าเริ่มต้นนี้ด้วยการแก้ไขสเตทเริ่มต้นใน constructor ของคอมโพเนนท์ Board:

```javascript{6}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
```

ทุกครั้งที่ผู้เล่นทำการเดินหมาก, `xIsNext` (ตัวแปรแบบ boolean) จะสลับค่า (true เป็น false หรือ false เป็น true) เพื่อดูว่าผู้เล่นคนไหนจะเป็นคนเดินต่อไปและสเตทของเกมจะถูกบันทึกไว้ เราจะปรับฟังก์ชั่น `handleClick` ของคอมโพเนนท์ Board เพื่อให้สามารถสลับค่าของ `xIsNext` ดังนี้:

```javascript{3,6}
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

ด้วยการเปลี่ยนแปลงนี้, "X" และ "O" จะสามารถผลัดกันเดินได้ ลองเล่นดู!

เดี๋ยวเรามาเปลี่ยนข้อความ "status" ในฟังก์ชั่น `render` ของคอมโพเนนท์ Board ด้วยเช่นกัน เพื่อให้แสดงผลว่าผู้เล่นคนไหนจะเป็นคนเดินหมากต่อไป:

```javascript{2}
  render() {
    const status = 'ผู้เล่นคนต่อไป: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      // ที่เหลือไม่ต้องเปลี่ยน
```

หลังจากการเปลี่ยนแปลงเหล่านี้, คอมโพเนนท์ Board ของคุณควรจะเป็นแบบนี้:

```javascript{6,11-16,29}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'ผู้เล่นคนต่อไป: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/KmmrBy?editors=0010)**

### ประกาศผู้ชนะ {#declaring-a-winner}

ตอนนี้เราสามารถแสดงให้เห็นได้ว่าผู้เล่นคนไหนจะเป็นคนเดินหมากต่อไป, เราก็ควรจะแสดงผลด้วยว่าใครคือผู้ชนะและไม่เหลือหมากให้เดินแล้ว คัดลอกฟังก์ชั่นตัวช่วยด้านล่างนี้และวางไว้ท้ายสุดของไฟล์:

```javascript
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

ฟังก์ชั่นนี้จะรับอาเรย์ 9 ช่อง, แล้วจะตรวจสอบหาผู้ชนะและส่งคืนค่า `'X'`, `'O'`, หรือ `null` ตามความเหมาะสม

เราจะเรียกใช้ฟังก์ชั่น `calculateWinner(squares)` ในฟังก์ชั่น `render` ของคอมโพเนนท์ Board เพื่อตรวจสอบหาผู้ชนะ ถ้าผู้เล่นคนใดคนหนึ่งชนะ, เราก็แสดงข้อความเช่น "ผู้ชนะ: X" หรือ "ผู้ชนะ: O" เราจะแทนที่ค่าของตัวแปร `status` ในฟังก์ชั่น `render` ของคอมโพเนนท์ Board ด้วยโค้ดนี้:

```javascript{2-8}
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'ผู้ชนะ: ' + winner;
    } else {
      status = 'ผู้เล่นคนต่อไป: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      // ที่เหลือไม่ต้องเปลี่ยน
```

ตอนนี้เราก็จะมาเปลี่ยนฟังก์ชั่น `handleClick` ในคอมโพเนนท์ Board เพื่อให้ไม่ต้องสนใจการคลิกเมื่อมีผู้ชนะไปแล้วหรือเมื่อคอมโพเนนท์ Square นั้นได้ถูกใส่ค่าลงไปแล้ว:

```javascript{3-5}
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/LyyXgK?editors=0010)**

ของแสดงความยินดีด้วย! ตอนนี้คุณมีเกมโอ-เอ็กซ์ที่เล่นได้จริงแล้ว และคุณก็ได้เรียนรู้พื้นฐานของ React ด้วยเช่นกัน ดังนั้นก็ถือได้ว่าตรงนี้ *คุณ* คือ ผู้ชนะตัวจริง

## เพิ่มการเดินทางข้ามเวลา {#adding-time-travel}

ในฐานะนี่เป็นแบบทดสอบสุดท้าย, มาทำให้เกมมีการ "การย้อนเวลากลับ" ไปที่การเดินหมากก่อนหน้ากันเถอะ

### เก็บประวัติการเดิน {#storing-a-history-of-moves}

ถ้าเราทำการเปลี่ยนรูปอาเรย์ `squares`, การจะทำให้มีการย้อนเวลาจะเป็นเรื่องที่ทำได้ยากมาก

อย่างไรก็ตาม, เราได้ใช้ฟังก์ชั่น `slice()` เพื่อสร้างสำเนาของอาเรย์ `squares` หลังจากที่มีการเดินหมากทุกตา, และ [เรายึดมั่นในการไม่เปลี่ยนแปลงรูป](#why-immutability-is-important) ด้วยเหตุนี้จะทำให้เราสามารถที่จะเก็บข้อมูลย้อนหลังทุก ๆ เวอร์ชั่นของอาเรย์ `squares` ไว้ได้, และสลับไปมาระหว่างหมากที่เคยเดินมาแล้วได้

เราจะเก็บข้อมูลย้อนหลังของอาเรย์ `squares` ไว้ในอีกอาเรย์ที่ชื่อ `history` ตัวอาเรย์ `history` นั้นจะแสดงสเตทของกระดานทั้งหมด, ตั้งแต่การเดินครั้งแรกจนถึงครั้งสุดท้าย, และจะมีรูปแบบดังนี้:

```javascript
history = [
  // ก่อนการเดินครั้งที่หนึ่ง
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  // หลังจากการเดินครั้งที่หนึ่ง
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // หลังจากการเดินครั้งที่สอง
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, 'O',
    ]
  },
  // ...
]
```

ตอนนี้เราจะมาตัดสินใจว่าจะเก็บสเตท `history` ไว้ที่คอมโพเนนท์ไหน

### ขยับสเตทขึ้น, อีกครั้ง {#lifting-state-up-again}

เราต้องการให้คอมโพเนนท์ Game ที่อยู่ชั้นบนสุดเป็นตัวแสดงรายการหมากที่เคยเดินมาทั้งหมด ซึ่งมันจำเป็นจะต้องเข้าถึงข้อมูล `history` ถึงจะทำแบบนั้นได้, ดังนั้นเราจะวางสเตท `history` ไว้ที่คอมโพเนนท์ Game

การวางสเตท `history` ไว้ในคอมโพเนนท์ Game ที่อยู่ชั้นบนสุด ทำให้เราสามารถลบสเตท `squares` ออกจากคอมโพเนนท์ Board ที่เป็นลูกของมันได้ เหมือนที่เราเคย ["ยกสเตทขึ้น"](#lifting-state-up) จากคอมโพเนนท์ Square ไปไว้ที่คอมโพเนนท์ Board, ตอนนี้เราจะยกมันขึ้นจากคอมโพเนนท์ Board ไปไว้ที่คอมโพเนนท์ Game ที่อยู่ชั้นบนสุด แบบนี้จะทำให้คอมโพเนนท์ Game เป็นตัวควบคุมข้อมูลของคอมโพเนนท์ Board ทั้งหมด, และให้มันเป็นตัวคอยสั่งคอมโพเนนท์ Board ให้เรนเดอร์จากการเดินหมากครั้งก่อน จากข้อมูลของสเตท `history`

ก่อนอื่น, เราจะตั้งค่าสเตทเริ่มต้นไว้ใน `constructor`ของคอมโพเนนท์ Game:

```javascript{2-10}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* สิ่งที่ต้องทำ */}</ol>
        </div>
      </div>
    );
  }
}
```

ต่อไป, เราจะให้คอมโพเนนท์ Board รับพร็อบ `squares` และพร็อบ `onClick` จากคอมโพเนนท์ Game เนื่องจากในคอมโพเนนท์ Board เรารองรับการคลิกแค่เพียงครั้งเดียวและส่งให้แก่คอมโพเนนท์ Square หลายตัว, เราจำเป็นต้องส่งตำแหน่งของคอมโพเนนท์ Square แต่ละตัวไปใน `onClick` เพื่อระบุว่าคอมโพเนนท์ Square ที่ถูกคลิก นี่คือขั้นตอนที่จำเป็นทั้งหมดเพื่อที่จะเปลี่ยนแปลงคอมโพเนนท์ Board:

* ลบ `constructor` ในคอมโพเนนท์ Board
* แทนที่ `this.state.squares[i]` ด้วย `this.props.squares[i]` ในฟังก์ชั่น `renderSquare` ของคอมโพเนนท์ Board
* แทนที่ `this.handleClick(i)` ด้วย `this.props.onClick(i)` ในฟังก์ชั่น `renderSquare` ของคอมโพเนนท์ Board

ตอนนี้คอมโพเนนท์ Board จะมีหน้าตาเป็นแบบนี้:

```javascript{17,18}
class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'ผู้ชนะ: ' + winner;
    } else {
      status = 'ผู้เล่นคนต่อไป: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

เราจะปรับฟังก์ชั่น `render` ของคอมโพเนนท์ Game เพื่อให้ใช้ข้อมูลจากประวัติการเดินล่าสุดเพื่อกำหนดและแสดงสถานะของเกม:

```javascript{2-11,16-19,22}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'ผู้ชนะ: ' + winner;
    } else {
      status = 'ผู้เล่นคนต่อไป: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* สิ่งที่ต้องทำ */}</ol>
        </div>
      </div>
    );
  }
```

เนื่องจากตอนนี้คอมโพเนนท์ Game เป็นตัวเรนเดอร์สถานะของเกม, เราก็จะสามารถลบโค้ดเหล่านี้ออกจากฟังก์ชั่น `render` ของคอมโพเนนท์ Board ได้ หลังจากที่ปรับโค้ดไปแล้ว, ฟังก์ชั่น `render` ของคอมโพเนนท์ Board จะมีหน้าตาเป็นแบบนี้:

```js{1-4}
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
```

สุดท้าย, เราจำเป็นต้องย้ายฟังก์ชั่น `handleClick` จากคอมโพเนน์ Board ไปคอมโพเนนท์ Game เราจำเป็นต้องแก้ไขฟังก์ชั่น `handleClick` ด้วยเช่นกันเพราะว่าสเตทของคอมโพเนนท์ Game มีโครงสร้างที่แตกต่างกัน ภายในฟังก์ชั่น `handleClick` ของคอมโพเนนท์ Game, เราจะรวมประวัติรายการใหม่เข้ากับ `history`

```javascript{2-4,10-12}
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }
```

>หมายเหตุ
>
>คุณอาจคุ้นเคยกับฟังก์ชั่น `push()` ของอาเรย์, แต่ว่าฟังก์ชั่น `concat()` นั้นต่างออกไปเพราะมันไม่ได้ทำการเปลี่ยนแปลงอาเรย์ต้นฉบับ, ดังนั้นเราจึงแนะนำให้ใช้

ถึงจุดนี้, คอมโพเนนท์ Board ต้องการเพียงแค่ฟังก์ชั่น `renderSquare` และ `render` ส่วนสเตทของเกมและฟังก์ชั่น `handleClick` ควรไปอยู่ในคอมโพเนนท์ Game

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/EmmOqJ?editors=0010)**

### แสดงการเดินที่ผ่านมา {#showing-the-past-moves}

เนื่องจากเราได้บันทึกประวัติการเดินเกมโอ-เอ็กซ์ไว้, ตอนนี้เราก็สามารถที่จะแสดงรายการเหล่านั้นให้ผู้เล่นดูได้

เราได้เรียนรู้ก่อนหน้านี้แล้วว่าส่วนประกอบของ React นั้นเป็นอ็อปเจคของ JavaScript; เราสามารถส่งต่อพวกมันไปมาในแอปพลิเคชั่นของเราได้ เพื่อเรนเดอร์รายการหลาย ๆ อันใน React, เราสามารถใช้อาเรย์ของส่วนประกอบของ React ได้

ใน JavaScript, อาเรย์มี [ฟังก์ชั่น `map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) ซึ่งโดยทั่วไปจะใช้สำหรับการประกอบข้อมูลให้เป็นข้อมูลอื่น, ตัวอย่างเช่น:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
```

ด้วยการใช้ฟังก์ชั่น `map`, เราสามารถประกอบประวัติการเดินของเราให้เป็นส่วนประกอบของ React แทนปุ่มบนหน้าจอ, และแสดงรายการของปุ่มเพื่อ "กระโดด" ไปที่การเดินครั้งก่อน

เดี๋ยวเราจะมา `map` ข้อมูล `history` ในฟังก์ชั่น `render` ของคอมโพเนนท์ Game กัน:

```javascript{6-15,34}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'ไปที่การเดิน #' + move :
        'ไปที่เริ่มเกม';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'ผู้ชนะ: ' + winner;
    } else {
      status = 'ผู้เล่นคนต่อไป: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
```

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/EmmGEa?editors=0010)**

<<<<<<< HEAD
สำหรับการเดินแต่ละครั้งในประวัติของเกมโอ-เอ็กซ์, เราสร้างรายการของ `<li>` ซึ่งมีปุ่ม `<button>` ตัวปุ่มนั้นจะมีฟังก์ชั่น `onClick` เพื่อที่จะรองรับการคลิกแล้วจะเรียกใช้ฟังก์ชั่น `this.jumpTo()` ณ ตรงนี้เราจะยังไม่ทำฟังก์ชั่น `jumpTo()` แต่ตอนนี้, เราควรจะเห็นรายการการเดินที่เกิดขึ้นภายในเกมและคำเตือนในหน้าจอคอนโซลของนักพัฒนาที่กล่าวว่า:
=======
For each move in the tic-tac-toe game's history, we create a list item `<li>` which contains a button `<button>`. The button has a `onClick` handler which calls a method called `this.jumpTo()`. We haven't implemented the `jumpTo()` method yet. For now, we should see a list of the moves that have occurred in the game and a warning in the developer tools console that says:
>>>>>>> bc91fe4101420f98454a59ac34c1cf1d4d4f4476

>  คำเตือน:
>  ลูกในอาเรย์แต่ละตัวควรจะมีค่าของพร็อบ "key" ที่ไม่ซ้ำกัน ตรวจสอบฟังก์ชั่น `render` ของ "คอมโพเนนท์ Game"

เรามาพูดถึงความหมายของคำเตือนข้างต้นกันดีกว่า

### การเลือก Key {#picking-a-key}

ตอนเราเรนเดอร์รายการสักอย่าง, React เก็บข้อมูลบางอย่างที่เกี่ยวกับแต่ละรายการที่ถูกเรนเดอร์จากรายการเหล่านั้น เมื่อเราทำการปรับปรุงรายการ, React ต้องตรวจสอบว่าอะไรที่มีการเปลี่ยนแปลง เราสามารถเพิ่ม, ลบ, เปลี่ยนตำแหน่ง, หรือปรับปรุงรายการ

ลองนึกภาพการเปลี่ยนจาก

```html
<li>Alexa: เหลืออีก 7 งาน</li>
<li>Ben: เหลืออีก 5 งาน</li>
```

ไปเป็น

```html
<li>Ben: เหลืออีก 9 งาน</li>
<li>Claudia: เหลืออีก 8 งาน</li>
<li>Alexa: เหลืออีก 5 งาน</li>
```

นอกเหนือจากการปรับจำนวนแล้ว, คนที่อ่านคงพูดได้ว่าว่า เราเปลี่ยนตำแหน่งของ Alexa และ Ben และเพิ่ม Claudia เข้าไปอยู่ในตำแหน่งระหว่าง Alexa และ Ben อย่างไรก็ตาม, React เป็นโปรแกรมคอมพิวเตอร์ซึ่งไม่รู้ว่าเราตั้งใจจะทำอะไร เพราะว่า React ไม่สามารถรู้เจตนาของเรา, เราจำเป็นต้องระบุ *key* เข้าไปในแต่ละรายการเพื่อแยกความแตกต่างจากพี่น้องของมัน ทางเลือกหนึ่งคือการใช้ข้อความ `alexa`, `ben`, `claudia` ถ้าเราแสดงข้อมูลจากฐานข้อมูล, ควรจะใช้ ID ของ Alexa, Ben, และ Claudia จากฐานข้อมูลเป็นคีย์แทน

```html
<li key={user.id}>{user.name}: เหลืออีก {user.taskCount} งาน</li>
```

เมื่อรายการมีการแสดงผลใหม่, React จะเอาคีย์ของรายการแต่ละตัวและไปค้นหารายการก่อนหน้านี้ที่มีคีย์ที่ตรงกัน ถ้ารายการปัจจุบันมีคีย์ที่ไม่เคยมีอยู่มาก่อน, React จะสร้างคอมโพเนนท์ขึ้น ถ้ารายการปัจจุบันไม่มีคีย์ที่เคยมีอยู่จากรายการก่อนหน้านี้, React จะทำลายคอมโพเนนท์ก่อนหน้า ถ้าคีย์ทั้งสองตรงกัน, คอมโพเนนท์ที่สอดคล้องกันนั้นจะถูกย้าย คีย์ของคอมโพเนน์แต่ละตัวบอก React เกี่ยวกับตัวตนของคอมโพเนนท์เหล่านั้นซึ่งทำให้ React สามารถรักษาสถานะระหว่างการแสดงผลซ้ำได้ ถ้าคีย์ของคอมโพเนนท์มีการเปลี่ยนแปลง, คอมโพเนนท์จะถูกทำลายและสร้างใหม่ด้วยสเตทใหม่

ใน React `key` เป็นคุณสมบัติพิเศษและสงวนไว้ (พร้อมด้วย `ref` ซึ่งเป็นฟีเจอร์ขั้นสูงตัวหนึ่ง) เมื่อส่วนประกอบถูกสร้างขึ้น, React จะแยก `key` ออกและเก็บคีย์ไว้โดยตรงที่ส่วนประกอบที่ถูกส่งคืนไป ถึงแม้ว่า `key` อาจดูเหมือนมันเป็นส่วนหนึ่งของ `props`, `key` ไม่สามารถอ้างถึงโดยการใช้ `this.props.key` ได้ ซึ่ง React จะใช้ `key` เพื่อตัดสินใจว่าคอมโพเนนท์ไหนจะถูกปรับปรุงโดยอัตโนมัติ คอมโพเนนท์จะไม่สามารถรู้ `key` ของตัวมันเอง

**ขอแนะนำอย่างยิ่งให้คุณกำหนดคีย์ที่เหมาะสมเมื่อใดก็ตามที่คุณสร้างรายการแบบที่เปลี่ยนแปลงอยู่เสมอ** ถ้าคุณไม่สามารถระบุคีย์ที่เหมาะสมได้, คุณอาจต้องพิจารณาปรับโครงสร้างข้อมูลของคุณใหม่

หากไม่มีการระบุคีย์, React จะแสดงคำเตือนและใช้ตำแหน่งของอาเรย์เป็นคีย์ค่าเริ่มต้น ใช้ตำแหน่งของอาเรย์เป็นคีย์นั้นค่อนข้างจะเป็นปัญหาเมื่อพยายามที่จะย้ายตำแหน่งของในรายการหรือเพิ่ม/ลบของออกจากรายการ การส่งค่า `key={i}` ถึงจะทำให้คำเตือนหายไปแต่ก็ทำให้เกิดปัญหาเดิมอยู่ดี และส่วนใหญ่เราก็ไม่แนะนำให้ทำเช่นนั้นด้วยเช่นกัน

คีย์ไม่จำเป็นต้องเป็นเอกลักษณ์เฉพาะในภาพใหญ่; แต่จำเป็นระหว่างคอมโพเนนท์และพี่น้องของมัน


### สร้างการเดินทางข้ามเวลา {#implementing-time-travel}

ในประวัติของเกมโอ-เอ็กซ์, การเดินแต่ละครั้งที่ผ่านมาจะมี ID เฉพาะผูกกับมันไว้: มันคือจำนวนต่อเนื่องของการเดิน การเดินแต่ละครั้งจะไม่มีการเปลี่ยนตำแหน่ง, ลบ, หรือแทรกเพิ่มเข้าไปตรงกลาง, ดังนั้นมันจึงปลอดภัยที่จะใช้ตำแหน่งการเดินเป็นคีย์ได้

ในฟังก์ชั่น `render` ของคอมโพเนนท์ Game, เราสามารถเพิ่มคีย์เป็น `<li key={move}>` และคำเตือนเกี่ยวกับคีย์จาก React ก็จะหายไป:

```js{6}
    const moves = history.map((step, move) => {
      const desc = move ?
        'ไปที่การเดิน #' + move :
        'ไปที่เริ่มเกม';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
```

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/PmmXRE?editors=0010)**

ตอนนี้ไม่ว่าจะคลิกปุ่มไหนในรายการก็จะทำให้เกิดเออเรอร์เพื่อว่าเรายังไม่ประกาศฟังก์ชั่น `jumpTo` ก่อนที่เราจะสร้างฟังก์ชั่น `jumpTo`, เราจะเพิ่ม `stepNumber` เข้าไปสเตทของในคอมโพเนนท์ Game เพื่อที่จะระบุว่าขั้นตอนไหนที่เรากำลังดูอยู่

เริ่มแรก, เพิ่มค่าเริ่มต้นของสเตท `stepNumber: 0` ไว้ใน `constructor` ของคอมโพเนนท์ Game:

```js{8}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
```

ต่อไป, เราประกาศฟังก์ชั่น `jumpTo` ในคอมโพเนนท์ Game เพื่อให้ปรับค่า `stepNumber` เราก็ทำให้ค่า `xIsNext` เป็น `true` ด้วยเช่นกัน ถ้าค่าตัวเลขที่เราเปลี่ยนที่ `stepNumber` เป็นเลขคู่:

```javascript{5-10}
  handleClick(i) {
    // ฟังก์ชั่นนี้ไม่ต้องเปลี่ยน
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    // ฟังก์ชั่นนี้ไม่ต้องเปลี่ยน
  }
```

ตอนนี้เราจะทำการเปลี่ยนแปลงฟังก์ชั่น `handleClick` ของคอมโพเนนท์ Game สักเล็กน้อยซึ่งจะยิงคำสั่งเมื่อมีการคลิกที่ตารางแต่ละช่อง

สเตท `stepNumber` ที่เราได้เพิ่่มเข้าไปนั้นสะท้อนถึงการแสดงการเดินของผู้เล่นปัจจุบัน หลังจากที่เราทำการเดินครั้งใหม่, เราจะเป็นต้องปรับค่า `stepNumber` ด้วยการเพิ่ม `stepNumber: history.length` เป็นส่วนหนึ่งของ `this.setState` อาร์กิวเมนต์ เพื่อให้แน่ใจว่าเราไม่แสดงค่าเดิมหลังจากที่ได้มีการครั้งใหม่แล้ว

เราจะทำการแทนที่การอ่าน `this.state.history` ด้วย `this.state.history.slice(0, this.state.stepNumber + 1)` เพื่อให้แน่ใจว่า "เมื่อเราย้อนเวลากลับไป" และทำการเดินหมากใหม่ตรงจุดนั้น, เราทิ้งประวัติการเดิน "ในอนาคต" ไปให้หมดเพราะนั่นจะทำให้เกิดความไม่ถูกต้องได้

```javascript{2,13}
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
```

สุดท้าย, เราจะแก้ไขฟังก์ชั่น `render` ของคอมโพเนนท์ Game จากที่เคยแสดงการเดินครั้งท้ายสุดไปเป็นแสดงการเดินที่ถูกเลือกจากขึ้นอยู่กับ `stepNumber`:

```javascript{3}
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // ที่เหลือไม่ต้องเปลี่ยน
```

ถ้าเราคลิกในช่วงไหนในประวัติของเกม, กระดานเกมโอ-เอ็กซ์จะมีการปรับปรุงทันทีเพื่อแสดงผลของกระดานไหนที่กำลังเกิดขึ้นอยู่

**[ดูโค้ดเต็มของจุดนี้](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**

### สรุป {#wrapping-up}

ขอแสดงความยินดีด้วย! เราได้สร้างเกมโอ-เอ็กซ์แล้ว:

* ให้คุณเล่นเกมโอ-เอ็กซ์,
* ระบุว่าผู้เล่นคนไหนชนะเกม,
* เก็บประวัติของเกมไว้ในขณะที่เกมยังคงดำเนินไป,
* อนุญาตให้ผู้เล่นสามารถดูประวัติเกมย้อนหลังในกระดาน

<<<<<<< HEAD
ทำได้ดีมาก! เราหวังว่าคุณจะรู้สึกว่าคุณเข้าใจวิธีการทำงานของ React ได้ดีมากขึ้น
=======
Nice work! We hope you now feel like you have a decent grasp of how React works.
>>>>>>> 1becaff62ae228d909b83ef6d08f48c01660300f

ตรวจสอบผลลัพธ์สุดท้ายที่นี่: **[ผลลัพธ์สุดท้าย](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**.

ถ้าคุณมีเวลาเหลือหรือต้องการจะฝึกฝนความสามารถ React ของคุณ, นี่คือแนวคิดสำหรับการปรับปรุงเกมโอเอ็กซ์ให้ดีขึ้น ซึ่งรายการเหล่านี้เรียกตามระดับความยาก:

1. แสดงตำแหน่งของแต่ละการเดินในรูปแบบ (คอลัมภ์, แถว) ในรายการของประวัติของเกม
2. ทำตัวหนาให้กับรายการที่ถูกเลือก ในรายการการเดิน
3. เขียนคอมโพเนนท์ Board ใหม่เพื่อให้ใช้การวนลูป 2 ครั้งแทนที่จะเป็นการเขียนโค้ดทื่อ ๆ ลงไป
4. เพิ่มปุ่มสลับเพื่อให้คุณสามารถเรียงการเดินจากน้อยไปมากและมากไปน้อยได้
5. เมื่อมีผู้ชนะ, ไฮไลท์ช่องสามช่องของคนที่ชนะ
6. เมื่อไม่มีผู้ชนะ, แสดงข้อความว่าผลเป็นเสมอกัน

ตลอดแบบฝึกหัดนี้, เราได้สัมผัสกับแนวคิดของ React ประกอบไปด้วย ส่วนประกอบ (Elements), คอมโพเนนท์ (Components), พร็อบ (Props), และ สเตท (State) สำหรับคำอธิบายโดยละเอียดเพิ่มเติมของแต่ละหัวข้อเหล่านี้, สามารถดู [จากส่วนที่เหลือของเอกสาร](/docs/hello-world.html) ได้ หรือเพื่อเรียนรู้เกี่ยวกับการสร้างคอมโพเนนท์ให้มากกว่านี้, สามารถดูที่ [เอกสามารถอ้างอิงของ `React.Component` API](/docs/react-component.html) ได้
