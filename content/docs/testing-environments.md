---
id: testing-environments
title: Testing Environments
permalink: docs/testing-environments.html
prev: testing-recipes.html
---

<!-- This document is intended for folks who are comfortable with JavaScript, and have probably written tests with it. It acts as a reference for the differences in testing environments for React components, and how those differences affect the tests that they write. This document also assumes a slant towards web-based react-dom components, but has notes for other renderers. -->

เอกสารนี้จะกล่าวถึงปัจจัยที่อาจส่งผลต่อสภาพแวดล้อมของคุณและคำแนะนำสำหรับบางสถานการณ์

### Test runners {#test-runners}

ตัวทดสอบอย่าง [Jest](https://jestjs.io/), [mocha](https://mochajs.org/), [ava](https://github.com/avajs/ava) ให้คุณเขียนชุดทดสอบเป็น JavaScript ปกติ และเรียกใช้เป็นส่วนหนึ่งของกระบวนการพัฒนาของคุณ นอกจากนี้ ชุดทดสอบยังทำงานเป็นส่วนหนึ่งของการผสานรวมอย่างต่อเนื่อง.

- Jest เข้ากันได้กับโปรเจ็กต์ React อย่างกว้างขวาง รองรับฟีเจอร์ต่างๆ เช่น [modules](#mocking-modules) และ [timers](#mocking-timers), และรองรับ [`jsdom`](#mocking-a-rendering-surface)  **หากคุณใช้ Create React App, [Jest จะถูกรวมไว้พร้อมค่าเริ่มต้น](https://facebook.github.io/create-react-app/docs/running-tests) ที่มีประโยชน์อยู่แล้ว.**
- ไลบรารีต่างๆ เช่น [mocha](https://mochajs.org/#running-mocha-in-the-browser) ทำงานได้ดีในสภาพแวดล้อมของเบราว์เซอร์จริง และสามารถช่วยในการทดสอบที่ต้องการได้อย่างชัดเจน.
- การทดสอบแบบ end-to-end ใช้สำหรับทดสอบโฟลว์ที่ยาวขึ้นในหลาย ๆ หน้า [และต้องมีการตั้งค่าอื่น](#end-to-end-tests-aka-e2e-tests).

### Mocking a rendering surface {#mocking-a-rendering-surface}

การทดสอบมักจะทำงานในสภาพแวดล้อมที่ไม่มีการเข้าถึงพื้นผิวการเรนเดอร์จริงเช่นเบราว์เซอร์ สำหรับสภาพแวดล้อมเหล่านี้ เราแนะนำให้จำลองเบราว์เซอร์ด้วย [`jsdom`](https://github.com/jsdom/jsdom), ซึ่งเป็นการใช้งานเบราว์เซอร์ขนาดเล็กที่ทำงานภายใน Node.js

ในกรณีส่วนใหญ่ jsdom จะทำงานเหมือนเบราว์เซอร์ทั่วไป แต่ไม่มีฟีเจอร์อย่าง [เลย์เอาต์(layout) และ การนำทาง(navigation)](https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform). วิธีนี้ยังคงมีประโยชน์สำหรับการทดสอบส่วนประกอบบนเว็บส่วนใหญ่ เนื่องจากทำงานได้เร็วกว่าการเปิดเบราว์เซอร์สำหรับการทดสอบแต่ละครั้ง นอกจากนี้ยังทำงานในกระบวนการเดียวกับการทดสอบของคุณ ดังนั้นคุณจึงสามารถเขียนโค้ดเพื่อตรวจสอบและยืนยันบน DOM ที่แสดงผลได้.


เช่นเดียวกับในเบราว์เซอร์จริง jsdom ทำให้เราจำลองการโต้ตอบของผู้ใช้ การทดสอบสามารถส่งเหตุการณ์บนโหนด DOM จากนั้นสังเกตและยืนยันผลข้างเคียงของการกระทำเหล่านี้ [<small>(ตัวอย่าง)</small>](/docs/testing-recipes.html#events).

การทดสอบ UI ส่วนใหญ่ สามารถเขียนได้ด้วยการตั้งค่าข้างต้น: ใช้ Jest เป็นตัวดำเนินการทดสอบ, แสดงผลเป็น jsdom โดยระบุการโต้ตอบของผู้ใช้เป็นลำดับของเหตุการณ์ของเบราว์เซอร์ ขับเคลื่อนโดย `act()` ตัวช่วย [<small>(ตัวอย่าง)</small>](/docs/testing-recipes.html). ตัวอย่างเช่น การทดสอบของ React จำนวนมากถูกเขียนด้วยชุดค่าผสมนี้.


หากคุณกำลังเขียนไลบรารีที่ทดสอบลักษณะการทำงานเฉพาะเบราว์เซอร์เป็นส่วนใหญ่ และต้องใช้ลักษณะการทำงานของเบราว์เซอร์ดั้งเดิม เช่น เลย์เอาต์หรืออินพุตจริง คุณสามารถใช้เฟรมเวิร์กอย่าง [mocha.](https://mochajs.org/)

ในสภาพแวดล้อมที่คุณไม่สามารถจำลอง DOM (เช่น การทดสอบส่วนประกอบ React Native บน Node.js), คุณสามารถใช้ตัว [event simulation helpers](/docs/test-utils.html#simulate) ช่วยการจำลองเหตุการณ์เพื่อจำลองการโต้ตอบกับองค์ประกอบ หรือคุณสามารถใช้ตัวช่วย `fireEvent` จาก [`@testing-library/react-native`](https://testing-library.com/docs/react-native-testing-library/intro).

Frameworks เช่น [Cypress](https://www.cypress.io/), [puppeteer](https://github.com/GoogleChrome/puppeteer) และ [webdriver](https://www.seleniumhq.org/projects/webdriver/) มีประโยชน์สำหรับการทดสอบแบบ [end-to-end tests](#end-to-end-tests-aka-e2e-tests).

### Mocking functions {#mocking-functions}

เมื่อเขียนการทดสอบ เราต้องการเยาะเย้ยส่วนต่างๆ ของโค้ดที่ไม่มีค่าเทียบเท่าในสภาพแวดล้อมการทดสอบของเรา (เช่น การตรวจสอบสถานะ  `navigator.onLine` ภายใน Node.js). การทดสอบยังสามารถสอดแนมฟังก์ชันบางอย่าง และสังเกตว่าส่วนอื่นๆ ของการทดสอบมีปฏิสัมพันธ์กับพวกเขาอย่างไร การเลือกจำลองฟังก์ชันเหล่านี้ด้วยเวอร์ชันที่เหมาะกับการทดสอบจึงเป็นประโยชน์

สิ่งนี้มีประโยชน์อย่างยิ่งสำหรับการดึงข้อมูล โดยปกติแล้ว ควรใช้ข้อมูล "ปลอม" สำหรับการทดสอบเพื่อหลีกเลี่ยงความช้าและความไม่สม่ำเสมอเนื่องจากการดึงข้อมูลจากปลายทาง API จริง [<small>(ตัวอย่าง)</small>](/docs/testing-recipes.html#data-fetching). สิ่งนี้จะช่วยทำให้การทดสอบสามารถคาดเดาได้. Libraries เช่น [Jest](https://jestjs.io/) และ [sinon](https://sinonjs.org/), ในระหว่างนั้น, รองรับฟังก์ชั่น mocked. สำหรับการทดสอบแบบ end-to-end, การ mocking เครือข่ายอาจทำได้ยากกว่า แต่คุณอาจต้องการทดสอบปลายทาง API จริงในเครือข่ายเหล่านี้ด้วย.

### Mocking modules {#mocking-modules}

Some components have dependencies for modules that may not work well in test environments, or aren't essential to our tests. It can be useful to selectively mock these modules out with suitable replacements [<small>(example)</small>](/docs/testing-recipes.html#mocking-modules).

On Node.js, runners like Jest [support mocking modules](https://jestjs.io/docs/en/manual-mocks). You could also use libraries like [`mock-require`](https://www.npmjs.com/package/mock-require).

### Mocking timers {#mocking-timers}

Components might be using time-based functions like `setTimeout`, `setInterval`, or `Date.now`. In testing environments, it can be helpful to mock these functions out with replacements that let you manually "advance" time. This is great for making sure your tests run fast! Tests that are dependent on timers would still resolve in order, but quicker [<small>(example)</small>](/docs/testing-recipes.html#timers). Most frameworks, including [Jest](https://jestjs.io/docs/en/timer-mocks), [sinon](https://sinonjs.org/releases/v7.3.2/fake-timers/) and [lolex](https://github.com/sinonjs/lolex), let you mock timers in your tests.

Sometimes, you may not want to mock timers. For example, maybe you're testing an animation, or interacting with an endpoint that's sensitive to timing (like an API rate limiter). Libraries with timer mocks let you enable and disable them on a per test/suite basis, so you can explicitly choose how these tests would run.

### End-to-end tests {#end-to-end-tests-aka-e2e-tests}

End-to-end tests are useful for testing longer workflows, especially when they're critical to your business (such as payments or signups). For these tests, you'd probably want to test how a real browser renders the whole app, fetches data from the real API endpoints, uses sessions and cookies, navigates between different links. You might also likely want to make assertions not just on the DOM state, but on the backing data as well (e.g. to verify whether the updates have been persisted to the database).

In this scenario, you would use a framework like [Cypress](https://www.cypress.io/) or a library like [puppeteer](https://github.com/GoogleChrome/puppeteer) so you can navigate between multiple routes and assert on side effects not just in the browser, but potentially on the backend as well.
