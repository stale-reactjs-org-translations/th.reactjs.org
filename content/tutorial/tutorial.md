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

## ก่อนที่เราจะเริ่มต้นทำแบบฝึกหัด {#before-we-start-the-tutorial}

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

## ตรวจสอบโค้ดเริ่มต้น {#inspecting-the-starter-code}

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

หลังจากการเปลี่ยนแปลงครั้งนี้, แท็ก `<button>` ที่ถูกคืนมาจากฟังก์ชั่น`render` ของคอมโพเนนท์ Square จะมีหน้าตาแบบนี้:

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

หลังจากติดตั้ง React DevTools, คุณสามารถคลิกขวาที่ไหนก็ได้บนหน้าเว็บ, คลิก "Inspect" เพื่อเปิดส่วนของเครื่องมือนักพัฒนาขึ้นมา, และแท็ปของ React จะปรากฎอยู่เป็นส่วนสุดท้ายทางขวามือสุด

**อย่างไรก็ตาม, มันก็มีขั้นตอนเพิ่มขึ้นเล็กน้อยถ้าจะทำให้มันทำการได้กับ CodePen:**

1. ล็อกอินหรือลงทะเบียนและทำการยืนยันอีเมล์ (จำเป็นเพื่อป้องกันสแปม)
2. คลิกที่ปุ่ม "Fork"
3. คลิก "Change View" แล้วเลือก "Debug mode"
4. ในหน้าแท็ปใหม่ที่เปิดขึ้น, ในส่วนของเครื่องมือควรจะเห็นแท็ปของ React

## Completing the Game {#completing-the-game}

We now have the basic building blocks for our tic-tac-toe game. To have a complete game, we now need to alternate placing "X"s and "O"s on the board, and we need a way to determine a winner.

### Lifting State Up {#lifting-state-up}

Currently, each Square component maintains the game's state. To check for a winner, we'll maintain the value of each of the 9 squares in one location.

We may think that Board should just ask each Square for the Square's state. Although this approach is possible in React, we discourage it because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store the game's state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, [just like we did when we passed a number to each Square](#passing-data-through-props).

**To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.**

Lifting state into a parent component is common when React components are refactored -- let's take this opportunity to try it out.

Add a constructor to the Board and set the Board's initial state to contain an array of 9 nulls corresponding to the 9 squares:

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

When we fill the board in later, the `this.state.squares` array will look something like this:

```javascript
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
```

The Board's `renderSquare` method currently looks like this:

```javascript
  renderSquare(i) {
    return <Square value={i} />;
  }
```

In the beginning, we [passed the `value` prop down](#passing-data-through-props) from the Board to show numbers from 0 to 8 in every Square. In a different previous step, we replaced the numbers with an "X" mark [determined by Square's own state](#making-an-interactive-component). This is why Square currently ignores the `value` prop passed to it by the Board.

We will now use the prop passing mechanism again. We will modify the Board to instruct each individual Square about its current value (`'X'`, `'O'`, or `null`). We have already defined the `squares` array in the Board's constructor, and we will modify the Board's `renderSquare` method to read from it:

```javascript{2}
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
```

**[View the full code at this point](https://codepen.io/gaearon/pen/gWWQPY?editors=0010)**

Each Square will now receive a `value` prop that will either be `'X'`, `'O'`, or `null` for empty squares.

Next, we need to change what happens when a Square is clicked. The Board component now maintains which squares are filled. We need to create a way for the Square to update the Board's state. Since state is considered to be private to a component that defines it, we cannot update the Board's state directly from Square.

Instead, we'll pass down a function from the Board to the Square, and we'll have Square call that function when a square is clicked. We'll change the `renderSquare` method in Board to:

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

>Note
>
>We split the returned element into multiple lines for readability, and added parentheses so that JavaScript doesn't insert a semicolon after `return` and break our code.

Now we're passing down two props from Board to Square: `value` and `onClick`. The `onClick` prop is a function that Square can call when clicked. We'll make the following changes to Square:

* Replace `this.state.value` with `this.props.value` in Square's `render` method
* Replace `this.setState()` with `this.props.onClick()` in Square's `render` method
* Delete the `constructor` from Square because Square no longer keeps track of the game's state

After these changes, the Square component looks like this:

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

When a Square is clicked, the `onClick` function provided by the Board is called. Here's a review of how this is achieved:

1. The `onClick` prop on the built-in DOM `<button>` component tells React to set up a click event listener.
2. When the button is clicked, React will call the `onClick` event handler that is defined in Square's `render()` method.
3. This event handler calls `this.props.onClick()`. The Square's `onClick` prop was specified by the Board.
4. Since the Board passed `onClick={() => this.handleClick(i)}` to Square, the Square calls `this.handleClick(i)` when clicked.
5. We have not defined the `handleClick()` method yet, so our code crashes. If you click a square now, you should see a red error screen saying something like "this.handleClick is not a function".

>Note
>
>The DOM `<button>` element's `onClick` attribute has a special meaning to React because it is a built-in component. For custom components like Square, the naming is up to you. We could give any name to the Square's `onClick` prop or Board's `handleClick` method, and the code would work the same. In React, it's conventional to use `on[Event]` names for props which represent events and `handle[Event]` for the methods which handle the events.

When we try to click a Square, we should get an error because we haven't defined `handleClick` yet. We'll now add `handleClick` to the Board class:

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

**[View the full code at this point](https://codepen.io/gaearon/pen/ybbQJX?editors=0010)**

After these changes, we're again able to click on the Squares to fill them, the same as we had before. However, now the state is stored in the Board component instead of the individual Square components. When the Board's state changes, the Square components re-render automatically. Keeping the state of all squares in the Board component will allow it to determine the winner in the future.

Since the Square components no longer maintain state, the Square components receive values from the Board component and inform the Board component when they're clicked. In React terms, the Square components are now **controlled components**. The Board has full control over them.

Note how in `handleClick`, we call `.slice()` to create a copy of the `squares` array to modify instead of modifying the existing array. We will explain why we create a copy of the `squares` array in the next section.

### Why Immutability Is Important {#why-immutability-is-important}

In the previous code example, we suggested that you use the `.slice()` operator to create a copy of the `squares` array to modify instead of modifying the existing array. We'll now discuss immutability and why immutability is important to learn.

There are generally two approaches to changing data. The first approach is to *mutate* the data by directly changing the data's values. The second approach is to replace the data with a new copy which has the desired changes.

#### Data Change with Mutation {#data-change-with-mutation}
```javascript
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```

#### Data Change without Mutation {#data-change-without-mutation}
```javascript
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};
```

The end result is the same but by not mutating (or changing the underlying data) directly, we gain several benefits described below.

#### Complex Features Become Simple {#complex-features-become-simple}

Immutability makes complex features much easier to implement. Later in this tutorial, we will implement a "time travel" feature that allows us to review the tic-tac-toe game's history and "jump back" to previous moves. This functionality isn't specific to games -- an ability to undo and redo certain actions is a common requirement in applications. Avoiding direct data mutation lets us keep previous versions of the game's history intact, and reuse them later.

#### Detecting Changes {#detecting-changes}

Detecting changes in mutable objects is difficult because they are modified directly. This detection requires the mutable object to be compared to previous copies of itself and the entire object tree to be traversed.

Detecting changes in immutable objects is considerably easier. If the immutable object that is being referenced is different than the previous one, then the object has changed.

#### Determining When to Re-Render in React {#determining-when-to-re-render-in-react}

The main benefit of immutability is that it helps you build _pure components_ in React. Immutable data can easily determine if changes have been made which helps to determine when a component requires re-rendering.

You can learn more about `shouldComponentUpdate()` and how you can build *pure components* by reading [Optimizing Performance](/docs/optimizing-performance.html#examples).

### Function Components {#function-components}

We'll now change the Square to be a **function component**.

In React, **function components** are a simpler way to write components that only contain a `render` method and don't have their own state. Instead of defining a class which extends `React.Component`, we can write a function that takes `props` as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.

Replace the Square class with this function:

```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

We have changed `this.props` to `props` both times it appears.

**[View the full code at this point](https://codepen.io/gaearon/pen/QvvJOv?editors=0010)**

>Note
>
>When we modified the Square to be a function component, we also changed `onClick={() => this.props.onClick()}` to a shorter `onClick={props.onClick}` (note the lack of parentheses on *both* sides).

### Taking Turns {#taking-turns}

We now need to fix an obvious defect in our tic-tac-toe game: the "O"s cannot be marked on the board.

We'll set the first move to be "X" by default. We can set this default by modifying the initial state in our Board constructor:

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

Each time a player moves, `xIsNext` (a boolean) will be flipped to determine which player goes next and the game's state will be saved. We'll update the Board's `handleClick` function to flip the value of `xIsNext`:

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

With this change, "X"s and "O"s can take turns. Try it!

Let's also change the "status" text in Board's `render` so that it displays which player has the next turn:

```javascript{2}
  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      // the rest has not changed
```

After applying these changes, you should have this Board component:

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
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

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

**[View the full code at this point](https://codepen.io/gaearon/pen/KmmrBy?editors=0010)**

### Declaring a Winner {#declaring-a-winner}

Now that we show which player's turn is next, we should also show when the game is won and there are no more turns to make. Copy this helper function and paste it at the end of the file:

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

Given an array of 9 squares, this function will check for a winner and return `'X'`, `'O'`, or `null` as appropriate.

We will call `calculateWinner(squares)` in the Board's `render` function to check if a player has won. If a player has won, we can display text such as "Winner: X" or "Winner: O". We'll replace the `status` declaration in Board's `render` function with this code:

```javascript{2-8}
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      // the rest has not changed
```

We can now change the Board's `handleClick` function to return early by ignoring a click if someone has won the game or if a Square is already filled:

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

**[View the full code at this point](https://codepen.io/gaearon/pen/LyyXgK?editors=0010)**

Congratulations! You now have a working tic-tac-toe game. And you've just learned the basics of React too. So *you're* probably the real winner here.

## Adding Time Travel {#adding-time-travel}

As a final exercise, let's make it possible to "go back in time" to the previous moves in the game.

### Storing a History of Moves {#storing-a-history-of-moves}

If we mutated the `squares` array, implementing time travel would be very difficult.

However, we used `slice()` to create a new copy of the `squares` array after every move, and [treated it as immutable](#why-immutability-is-important). This will allow us to store every past version of the `squares` array, and navigate between the turns that have already happened.

We'll store the past `squares` arrays in another array called `history`. The `history` array represents all board states, from the first to the last move, and has a shape like this:

```javascript
history = [
  // Before first move
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  // After first move
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // After second move
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

Now we need to decide which component should own the `history` state.

### Lifting State Up, Again {#lifting-state-up-again}

We'll want the top-level Game component to display a list of past moves. It will need access to the `history` to do that, so we will place the `history` state in the top-level Game component.

Placing the `history` state into the Game component lets us remove the `squares` state from its child Board component. Just like we ["lifted state up"](#lifting-state-up) from the Square component into the Board component, we are now lifting it up from the Board into the top-level Game component. This gives the Game component full control over the Board's data, and lets it instruct the Board to render previous turns from the `history`.

First, we'll set up the initial state for the Game component within its constructor:

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
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
```

Next, we'll have the Board component receive `squares` and `onClick` props from the Game component. Since we now have a single click handler in Board for many Squares, we'll need to pass the location of each Square into the `onClick` handler to indicate which Square was clicked. Here are the required steps to transform the Board component:

* Delete the `constructor` in Board.
* Replace `this.state.squares[i]` with `this.props.squares[i]` in Board's `renderSquare`.
* Replace `this.handleClick(i)` with `this.props.onClick(i)` in Board's `renderSquare`.

The Board component now looks like this:

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
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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

We'll update the Game component's `render` function to use the most recent history entry to determine and display the game's status:

```javascript{2-11,16-19,22}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
```

Since the Game component is now rendering the game's status, we can remove the corresponding code from the Board's `render` method. After refactoring, the Board's `render` function looks like this:

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

Finally, we need to move the `handleClick` method from the Board component to the Game component. We also need to modify `handleClick` because the Game component's state is structured differently. Within the Game's `handleClick` method, we concatenate new history entries onto `history`.

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

>Note
>
>Unlike the array `push()` method you might be more familiar with, the `concat()` method doesn't mutate the original array, so we prefer it.

At this point, the Board component only needs the `renderSquare` and `render` methods. The game's state and the `handleClick` method should be in the Game component.

**[View the full code at this point](https://codepen.io/gaearon/pen/EmmOqJ?editors=0010)**

### Showing the Past Moves {#showing-the-past-moves}

Since we are recording the tic-tac-toe game's history, we can now display it to the player as a list of past moves.

We learned earlier that React elements are first-class JavaScript objects; we can pass them around in our applications. To render multiple items in React, we can use an array of React elements.

In JavaScript, arrays have a [`map()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) that is commonly used for mapping data to other data, for example:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
```

Using the `map` method, we can map our history of moves to React elements representing buttons on the screen, and display a list of buttons to "jump" to past moves.

Let's `map` over the `history` in the Game's `render` method:

```javascript{6-15,34}
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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

**[View the full code at this point](https://codepen.io/gaearon/pen/EmmGEa?editors=0010)**

For each move in the tic-tac-toes's game's history, we create a list item `<li>` which contains a button `<button>`. The button has a `onClick` handler which calls a method called `this.jumpTo()`. We haven't implemented the `jumpTo()` method yet. For now, we should see a list of the moves that have occurred in the game and a warning in the developer tools console that says:

>  Warning:
>  Each child in an array or iterator should have a unique "key" prop. Check the render method of "Game".

Let's discuss what the above warning means.

### Picking a Key {#picking-a-key}

When we render a list, React stores some information about each rendered list item. When we update a list, React needs to determine what has changed. We could have added, removed, re-arranged, or updated the list's items.

Imagine transitioning from

```html
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```

to

```html
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

In addition to the updated counts, a human reading this would probably say that we swapped Alexa and Ben's ordering and inserted Claudia between Alexa and Ben. However, React is a computer program and does not know what we intended. Because React cannot know our intentions, we need to specify a *key* property for each list item to differentiate each list item from its siblings. One option would be to use the strings `alexa`, `ben`, `claudia`. If we were displaying data from a database, Alexa, Ben, and Claudia's database IDs could be used as keys.

```html
<li key={user.id}>{user.name}: {user.taskCount} tasks left</li>
```

When a list is re-rendered, React takes each list item's key and searches the previous list's items for a matching key. If the current list has a key that didn't exist before, React creates a component. If the current list is missing a key that existed in the previous list, React destroys the previous component. If two keys match, the corresponding component is moved. Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component's key changes, the component will be destroyed and re-created with a new state.

`key` is a special and reserved property in React (along with `ref`, a more advanced feature). When an element is created, React extracts the `key` property and stores the key directly on the returned element. Even though `key` may look like it belongs in `props`, `key` cannot be referenced using `this.props.key`. React automatically uses `key` to decide which components to update. A component cannot inquire about its `key`.

**It's strongly recommended that you assign proper keys whenever you build dynamic lists.** If you don't have an appropriate key, you may want to consider restructuring your data so that you do.

If no key is specified, React will present a warning and use the array index as a key by default. Using the array index as a key is problematic when trying to re-order a list's items or inserting/removing list items. Explicitly passing `key={i}` silences the warning but has the same problems as array indices and is not recommended in most cases.

Keys do not need to be globally unique; they only need to be unique between components and their siblings.


### Implementing Time Travel {#implementing-time-travel}

In the tic-tac-toe game's history, each past move has a unique ID associated with it: it's the sequential number of the move. The moves are never re-ordered, deleted, or inserted in the middle, so it's safe to use the move index as a key.

In the Game component's `render` method, we can add the key as `<li key={move}>` and React's warning about keys should disappear:

```js{6}
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
```

**[View the full code at this point](https://codepen.io/gaearon/pen/PmmXRE?editors=0010)**

Clicking any of the list item's buttons throws an error because the `jumpTo` method is undefined. Before we implement `jumpTo`, we'll add `stepNumber` to the Game component's state to indicate which step we're currently viewing.

First, add `stepNumber: 0` to the initial state in Game's `constructor`:

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

Next, we'll define the `jumpTo` method in Game to update that `stepNumber`. We also set `xIsNext` to true if the number that we're changing `stepNumber` to is even:

```javascript{5-10}
  handleClick(i) {
    // this method has not changed
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    // this method has not changed
  }
```

We will now make a few changes to the Game's `handleClick` method which fires when you click on a square.

The `stepNumber` state we've added reflects the move displayed to the user now. After we make a new move, we need to update `stepNumber` by adding `stepNumber: history.length` as part of the `this.setState` argument. This ensures we don't get stuck showing the same move after a new one has been made.

We will also replace reading `this.state.history` with `this.state.history.slice(0, this.state.stepNumber + 1)`. This ensures that if we "go back in time" and then make a new move from that point, we throw away all the "future" history that would now become incorrect.

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

Finally, we will modify the Game component's `render` method from always rendering the last move to rendering the currently selected move according to `stepNumber`:

```javascript{3}
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // the rest has not changed
```

If we click on any step in the game's history, the tic-tac-toe board should immediately update to show what the board looked like after that step occurred.

**[View the full code at this point](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**

### Wrapping Up {#wrapping-up}

Congratulations! You've created a tic-tac-toe game that:

* Lets you play tic-tac-toe,
* Indicates when a player has won the game,
* Stores a game's history as a game progresses,
* Allows players to review a game's history and see previous versions of a game's board.

Nice work! We hope you now feel like you have a decent grasp on how React works.

Check out the final result here: **[Final Result](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)**.

If you have extra time or want to practice your new React skills, here are some ideas for improvements that you could make to the tic-tac-toe game which are listed in order of increasing difficulty:

1. Display the location for each move in the format (col, row) in the move history list.
2. Bold the currently selected item in the move list.
3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
4. Add a toggle button that lets you sort the moves in either ascending or descending order.
5. When someone wins, highlight the three squares that caused the win.
6. When no one wins, display a message about the result being a draw.

Throughout this tutorial, we touched on React concepts including elements, components, props, and state. For a more detailed explanation of each of these topics, check out [the rest of the documentation](/docs/hello-world.html). To learn more about defining components, check out the [`React.Component` API reference](/docs/react-component.html).
