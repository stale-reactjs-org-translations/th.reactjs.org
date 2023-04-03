# react.dev

<<<<<<< HEAD
เรโป (repo) นี้ประกอบไปด้วยซอร์สโค้ด (source code) และเอกสารสำหรับ [reactjs.org](https://reactjs.org/).
=======
This repo contains the source code and documentation powering [react.dev](https://react.dev/).
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638

## เริ่มต้นใช้งาน

### ข้อกำหนดเบื้องต้น

1. Git
<<<<<<< HEAD
1. Node: เวอร์ชั่น 12.x โดยเริ่มต้นที่ v12.0.0 หรือเวอร์ชั่นที่ใหม่กว่า
1. Yarn: ดู [เว็บไซต์ Yarn: คำแนะนำสำหรับการติดตั้ง](https://yarnpkg.com/lang/en/docs/install/)
1. เรโป (repo) ที่ fork แล้ว (สำหรับผู้ที่เข้าร่วมโครงการ)
1. clone ของ [reactjs.org repo](https://github.com/reactjs/reactjs.org) บนเครื่องของคุณ
=======
1. Node: any 12.x version starting with v12.0.0 or greater
1. Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. A fork of the repo (for any contributions)
1. A clone of the [react.dev repo](https://github.com/reactjs/react.dev) on your local machine
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638

### การติดตั้ง

<<<<<<< HEAD
1. `cd reactjs.org` เพื่อเข้าไปในรูทโปรเจ็กต์
1. `yarn` เพื่อติดตั้ง npm ดีเพนเดนซี (npm dependencie) ของเว็บไซต์
=======
1. `cd react.dev` to go into the project root
3. `yarn` to install the website's npm dependencies
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638

### การทำงานในเครื่อง

<<<<<<< HEAD
1. `yarn dev` เพื่อที่จะเริ่มต้นฮอทรีโหลดดิ้ง (hot-reloading) เซิฟเวอร์ที่กำลังพัฒนาอยู่ (สนับสนุนโดย [Gatsby](https://www.gatsbyjs.org))
1. `open http://localhost:8000` เพื่อเปิดเว็บไซต์ในบราวเซอร์ใดก็ได้ที่คุณชอบ
=======
1. `yarn dev` to start the development server (powered by [Next.js](https://nextjs.org/))
1. `open http://localhost:3000` to open the site in your favorite browser
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638

## การสนับสนุน

### แนวทาง

<<<<<<< HEAD
เอกสารแบ่งออกเป็นหลายส่วนด้วยลักษณะและวัตถุประสงค์ที่แตกต่างกัน หากคุณวางแผนที่จะเขียนมากกว่าสองสามประโยค คุณอาจพบว่าการทำความคุ้นเคยกับ [แนวทางการสนับสนุน](https://github.com/reactjs/reactjs.org/blob/master/CONTRIBUTING.md#guidelines-for-text) นั้นเป็นประโยชน์สำหรับแต่ละส่วน
=======
The documentation is divided into several sections with a different tone and purpose. If you plan to write more than a few sentences, you might find it helpful to get familiar with the [contributing guidelines](https://github.com/reactjs/react.dev/blob/main/CONTRIBUTING.md#guidelines-for-text) for the appropriate sections.
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638

### สร้าง branch

<<<<<<< HEAD
1. `git checkout master` ในโฟลเดอร์ของเรโป (repository) `reactjs.org` บนเครื่องของคุณ
1. `git pull origin master` เพื่อให้มั่นใจว่าคุณมีโค้ดหลัก (main code) อันล่าสุด
1. `git checkout -b the-name-of-my-branch` (แทนที่ `the-name-of-my-branch` ด้วยชื่อที่เหมาะสม) เพื่อที่จะสร้าง
=======
1. `git checkout main` from any folder in your local `react.dev` repository
1. `git pull origin main` to ensure you have the latest main code
1. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638

### การสร้างความเปลี่ยนแปลง

1. ทำตามขั้นตอน "การทำงานในเครื่อง"
1. เซฟไฟล์และตรวจสอบบนบราวเซอร์
  1. แก้ไขหรือเปลี่ยนแปลง React components ใน `src` จะทำให้ฮอทรีโหลด (hot-reload)
  1. แก้ไขหรือเปลี่ยนแปลงไฟล์มาร์กดาวน์ (markdown) ใน `content` จะทำให้ฮอทรีโหลด (hot-reload)
  1. ถ้าหากทำงานกับปลั๊กอิน (plugin), คุณอาจจำเป็นต้องลบ `.cache` ไดเรกทอรี (directory) และรีสตาร์ทเซิร์ฟเวอร์

### ทดสอบสิ่งที่เปลี่ยน

<<<<<<< HEAD
1. หากเป็นไปได้, ทดสอบการเปลี่ยนแปลงที่มองเห็นได้ด้วยตาในเบราว์เซอร์ทั่วไปที่เป็นเวอร์ชันล่าสุด ทั้งบนเดสก์ท็อปและมือถือ
1. รัน `yarn check-all` ในรูทโปรเจค (นี่จะทำให้รัน Prettier, ESLint, และ Flow)
=======
1. If possible, test any visual changes in all latest versions of common browsers, on both desktop and mobile.
2. Run `yarn check-all`. (This will run Prettier, ESLint and validate types.)
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638

### Push it

1. `git add -A && git commit -m "My message"` (แทนที่ `My message` ด้วยข้อความที่จะคอมมิท เช่น `Fix header logo on Android`) เพื่อสเตทและคอมมิทสิ่งที่คุณเปลี่ยนแปลง
1. `git push my-fork-name the-name-of-my-branch`
<<<<<<< HEAD
1. ไปที่ [reactjs.org repo](https://github.com/reactjs/reactjs.org) และคุณควรจะเห็น branch ล่าสุดที่คุณ push
1. ทำตามคำแนะนำของ GitHub
1. หากเป็นไปได้, เพิ่มภาพสกรีนชอต (screenshot) ของการเปลี่ยนแปลงที่มองเห็นได้ [Netlify](https://www.netlify.com/) build จะถูกสร้างโดยอัตโนมัติเมื่อคุณสร้าง PR เพื่อให้คนอื่นเห็นการเปลี่ยนแปลงที่คุณทำ
=======
1. Go to the [react.dev repo](https://github.com/reactjs/react.dev) and you should see recently pushed branches.
1. Follow GitHub's instructions.
1. If possible, include screenshots of visual changes. A preview build is triggered after your changes are pushed to GitHub.
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638

## การแปลภาษา

<<<<<<< HEAD
ถ้าคุณสนใจในการแปล `reactjs.org`, ดูการแปลปัจจุบันได้ที่ [isreacttranslatedyet.com](https://www.isreacttranslatedyet.com/)


หากภาษาของคุณไม่มีการแปลและคุณต้องการที่จะสร้าง โปรดทำตามคำแนะนำที่ [reactjs.org Translations](https://github.com/reactjs/reactjs.org-translation#translating-reactjsorg)

## การแก้ไขปัญหา

- `yarn reset` เพื่อล้างแคชในเครื่อง

## การอนุญาต
เนื้อหาที่ส่งไปยัง [reactjs.org](https://reactjs.org/) ได้รับใบอนุญาต CC-BY-4.0 ตามที่พบในไฟล์ [LICENSE-DOCS.md](https://github.com/open-source-explorer/reactjs.org/blob/master/LICENSE-DOCS.md)
=======
If you are interested in translating `react.dev`, please see the current translation efforts [here](https://github.com/reactjs/react.dev/issues/4135).

## License
Content submitted to [react.dev](https://react.dev/) is CC-BY-4.0 licensed, as found in the [LICENSE-DOCS.md](https://github.com/reactjs/react.dev/blob/main/LICENSE-DOCS.md) file.
>>>>>>> f37ef36b070730ce8abd68860388179ed4284638
