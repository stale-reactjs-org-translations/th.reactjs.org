# reactjs.org

เรโป (repo) นี้ประกอบไปด้วยซอร์สโค้ด (source code) และเอกสารสำหรับ [reactjs.org](https://reactjs.org/).

## เริ่มต้นใช้งาน

### ข้อกำหนดเบื้องต้น

1. Git
1. Node: เวอร์ชั่น 8.x โดยเริ่มต้นที่ 8.4.0 หรือเวอร์ชั่นที่ใหม่กว่า
1. Yarn: ดู [เว็บไซต์ Yarn: คำแนะนำสำหรับการติดตั้ง](https://yarnpkg.com/lang/en/docs/install/)
1. ฟอค (fork) จากเรโป (repo) สำหรับทุก คอนทริบิวชั่น (contributions)
1. โคลน (clone) ของโปรเจค [reactjs.org repo](https://github.com/reactjs/reactjs.org) บนเครื่องของคุณ

### การติดตั้ง

1. `cd reactjs.org` เพื่อเข้าไปในรูทโปรเจ็กต์
1. `yarn` เพื่อติดตั้ง npm ดีเพนเดนซี (npm dependencie) ของเว็บไซต์

### ทำงานบนเครื่องของคุณ

1. `yarn dev` เพื่อที่จะเริ่มต้นฮอทรีโหลดดิ้ง (hot-reloading) บนเซิฟเวอร์ที่กำลังพัฒนาอยู่ (สนับสนุนโดย [Gatsby](https://www.gatsbyjs.org))
1. `open http://localhost:8000` เพื่อเปิดเว็บไซต์ในบราวเซอร์ใดก็ได้ที่คุณชอบ

## การสนับสนุน

### แนวทาง

เอกสารนี้ถูกแบ่งออกเป็นหลายๆเซคชั่น ซึ่งแต่ละเซคชั่นแตกต่างกันทั้งโทนและวัตถุประสงค์ ถ้าคุณวางแผนที่จะเขียนเพิ่มเติมมากกว่านี้, คุณอาจต้องขอความช่วยเหลือจากคนที่คุ้นเคยกับ [contributing guidelines](https://github.com/reactjs/reactjs.org/blob/master/CONTRIBUTING.md#guidelines-for-text) เพื่อหาเซคชั่นที่เหมาะสมกับเนื้อหาของคุณ

### สร้าง branch

1. `git checkout master` ในโฟลเดอร์ใดก็ได้ที่อยู่ในโปรเจค `reactjs.org` ของคุณ
1. `git pull origin master` เพื่อให้คุณแน่ใจว่าโค้ดหลักของโปรเจคเป็นเวอร์ชั่นล่าสุด
1. `git checkout -b the-name-of-my-branch` (แทนที่ `the-name-of-my-branch` ด้วยชื่อที่เหมาะสม) เพื่อสร้าง branch

### สร้างความเปลี่ยนแปลง

1. ทำตามขั้นตอน "ทำงานบนเครื่องของคุณ"
1. บันทึกไฟล์ต่างๆ และเปิดไปยังบราวเซอร์
  1. การเปลี่ยนแปลงต่างๆ ที่เกิดขึ้นกับ React คอมโพเนนต์ (React components) ใน `src` จะทำให้เกิดการฮอทรีโหลด (hot-reload)
  1. การเปลี่ยนแปลงต่างๆ ที่เกิดขึ้นกับ มาร์กดาวน์ (markdown) ใน `content` จะทำให้เกิดการฮอทรีโหลด (hot-reload)
  1. หากทำงานร่วมกับปลั๊กอินต่างๆ, คุณอาจจะต้องทำการลบ `.cache` ไดเรกทอรี และรีสตาร์ทเซิร์ฟเวอร์

### ทดสอบสิ่งที่เปลี่ยนแปลง

1. หากเป็นไปได้, ทำการทดสอบทุกการเปลี่ยนแปลงที่เกิดขึ้น บนบราวเซอร์ต่างๆ ที่เป็นเวอร์ชั่นล่าสุด, ทั้งบน เดสก์ท็อป (desktop) และโทรศัพท์มือถือ (mobile)
1. รัน `yarn check-all` ในรูทโปรเจกต์ (คำสั่งนี้จะรัน Prettier, ESLint และ Flow)

### ส่งการเปลี่ยนแปลง

1. `git add -A && git commit -m "My message"` (แทนที่ `My message` ด้วยข้อความคอมมิท (commit), ตัวอย่างเช่น `Fix header logo on Android`) เพื่อสเตจ (stage) และคอมมิท (commit) การเปลี่ยนแปลงของคุณ
1. `git push my-fork-name the-name-of-my-branch`
1. ไปที่ [reactjs.org repo](https://github.com/reactjs/reactjs.org) และคุณจะเห็นบรานซ์ต่างๆ (branches) ที่ถูกส่งมาล่าสุด
1. ทำตามขั้นตอน GitHub
1. หากเป็นไปได้, ให้แนบสกรีนช็อต (screenshots) ของการเปลี่ยนแปลง, เน็ตลิฟาย (Netlify) จะถูกบิ้ว (build) อันติโนมัติทุกๆครั้งที่คุณสร้าง PR (พลูรีเควส) เพื่อให้ทุกคนเห็นการเปลี่ยนแปลงที่คุณส่งมา

## การแปลภาษา

หากคุณสนใจในการแปลภาษา `reactjs.org`, โปรดตรวจสอบผลจากความพยายามในการแปลได้ที่ [isreacttranslatedyet.com](https://www.isreacttranslatedyet.com/)

หากภาษาของคุณยังไม่ได้รับการแปลและคุณต้องการจะให้แปล, โปรดดูขั้นตอนได้ที่ [reactjs.org Translations](https://github.com/reactjs/reactjs.org-translation#translating-reactjsorg)

## การแก้ไขปัญหา

- `yarn reset` เพื่อเคลียร์แคช (cache) ในเครื่องของคุณ

## ใบอนุญาต
คอนเท้นที่ถูกส่งไปที่ [reactjs.org](https://reactjs.org/) จะมีใบอนุญาตเป็น CC-BY-4.0, เช่นเดียวกับ [LICENSE-DOCS.md](https://github.com/open-source-explorer/reactjs.org/blob/master/LICENSE-DOCS.md) ไฟล์
