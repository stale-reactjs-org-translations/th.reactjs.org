---
id: conditional-rendering
title: Conditional Rendering
permalink: docs/conditional-rendering.html
prev: handling-events.html
next: lists-and-keys.html
redirect_from:
  - "tips/false-in-jsx.html"
---

ใน React คุณสามารถสร้างคอมโพเนนท์ที่เป็นส่วนๆ และมีพฤติกรรมภายของตัวเองอย่างที่คุณต้องการ จากนั้นคุณสามารถเลือกแสดงผลเพียงบางส่วนได้ ซึ่งขึ้นอยุ่กับ state ของแอพที่คุณสร้าง

Conditional rendering(เงื่อนใขการแสดงผล) ใน React นั้นทำงานคล้ายกับเงื่อนใขใน JavaScript ในบางส่วน ซึ่งใช้ตัวโอเปอเรเตอร์ของ Javascript เช่น [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) หรือ [conditional operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) เพื่อสร้าง element ที่เป็นตัวแทนของ state ปัจจุบัน และให้ React ปรับปรุงส่วนแสดงผลให้ตรงกับ element เหล่านั้น

เมื่อพิจารณาจาก 2 คอมโพเนนท์นี้:

```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

เราจะสร้างคอมโพเนนท์ `Greeting` ให้เปลี่ยนการแสดงผลให้ขึ้นอยู่กับว่ามีผู้ใช้เข้ามาใช้งาน(User Login)หรือไม่:

```javascript{3-7,11,12}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

<<<<<<< HEAD
ReactDOM.render(
  // ลองเปลี่ยนให้เป็น isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
=======
const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
>>>>>>> 664dd5736287e01a4557cd03c9a8736682911b34
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/ZpVxNq?editors=0011)

จากตัวอย่างข้างต้น ความแตกต่างของการแสดงผลคำทักทายจะขึ้นอยู่กับค่าของ `isLoggedIn` prop

### Element Variables(ตัวแปรขององค์ประกอบ) {#element-variables}

คุณสามารถใช้ตัวแปรในการเก็บ elements ได้ ซึ่งจะช่วยคุณในการกำหนดเงื่อนใขในการแสดงผลในบางส่วนของคอมโพเนนท์โดยจะไม่ทำให้ผลลัพธ์ในส่วนอื่นๆเปลี่ยนแปลง

พิจารณาจาก 2 คอมโพเนนท์ใหม่นี้ จะแสดงปุ่ม Login และ Logout:

```js
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```

ในตัวอย่างข้างล่าง เราจะสร้าง [stateful คอมโพเนนท์](/docs/state-and-lifecycle.html#adding-local-state-to-a-class) ที่เรียกว่า `LoginControl`

จะมีการแสดงผล `<LoginButton />` หรือ `<LogoutButton />` ซึ่งขึ้นอยู่กับ state ในขณะนั้น และมีการนำ `<Greeting />` จากตัวอย่างที่แล้วมาแสดงผลด้วย:

```javascript{20-25,29,30}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/QKzAgB?editors=0010)

ปกติการประกาศตัวแปรและใช้ `if` ซึ่งเป็นทางที่ดีในการสร้างเงื่อนใขในการแสดงผลคอมโพเนนท์ แต่ในบางครั้งคุณอาจจะต้องการที่จะใช้ syntax ที่สั้นกว่า เราจะอธิบายการใช้เงื่อนใขแบบ inline ใน JSX ด้านล่างนี้:

### Inline If กับ Logical && Operator {#inline-if-with-logical--operator}

คุณอาจจะใช้ [embed expressions อะไรก็ได้ใน JSX](/docs/introducing-jsx.html#embedding-expressions-in-jsx) โดยการครอบพวกมันไว้ในวงเล็บปีกกา(curly braces) โดยใช้ JavaScript logical `&&` operator ในการสร้างเงื่อนใขในการนำ element เข้ามาประกอบกันหรือไม่:

```js{6-10}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Mailbox unreadMessages={messages} />);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/ozJddz?editors=0010)

มันทำงานได้เพราะว่า JavaScript จะประมวลผล `true && expression` เป็น `expression` เสมอ และประมวลผล `false && expression` เป็นค่า `false` เสมอ

ด้วยเหตุนี้ถ้าเงื่อนใขเป็น `true` แล้ว element ด้านขวาที่อยู่หลัง `&&` จะปรากฏเป็นเป็นผลลัพธ์เสมอ ถ้ามันเป็น `false` แล้ว React จะเพิกเฉยและข้ามมันไป

### Inline If-Else กับ Conditional Operator {#inline-if-else-with-conditional-operator}
Note that returning a falsy expression will still cause the element after `&&` to be skipped but will return the falsy expression. In the example below, `<div>0</div>` will be returned by the render method.

```javascript{2,5}
render() {
  const count = 0;
  return (
    <div>
      {count && <h1>Messages: {count}</h1>}
    </div>
  );
}
```

อีกวิธีหนึ่งสำหรับการสร้างเงื่อนใขในการแสดงผลแบบ inline คือ การใช้ JavaScript conditional operator [`condition ? true : false`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).
ในตัวอย่างด้านล่าง เราใชัมันในการสร้างเงื่อนใขในการแสดงผลสำหรับข้อความสั้นบางส่วน:

```javascript{5}
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

มันยังสามารถที่จะใช้กัน expressions ขนาดใหญ่ได้ด้วย แม้ว่ามันจะทำให้ดูซับซ้อนขึ้นมากขึ้น:

```js{5,7,9}
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
```

ซึ่งเหมือนใน JavaScript มันขึ้นอยู่กับคุณจะเลือกรูปแบบการใช้แบบไหนนั้น ขึ้นอยู่กับคุณและทีมของคุณเห็นว่าอันไหนอ่านง่ายที่สุด แต่อย่าลืมว่าเมื่อไหร่ที่เงื่อนใขมีความซับซ้อนมาก ก็เป็นเวลาที่ดีที่จะ[แยกย่อยคอมโพเนนท์](/docs/components-and-props.html#extracting-components).

### ป้องกันคอมโพเนนท์จากการแสดงผล {#preventing-component-from-rendering}

ในบางกรณีคุณอาจจะต้องการให้คอมโพเนนท์ซ่อนตัวเอง แม้ว่าตัวมันเองนั้นจะถูกใช้งานในคอมโพเนนท์อื่น โดยให้คอมโพเนนท์คืนค่า `null` แทนที่จะเป็นผลลัพธ์อย่างอื่น

ในตัวอย่างข้างล่าง `<WarningBanner />` จะแสดงผลขึ้นอยู่กับค่าของ prop ที่ชื่อว่า `warn` ถ้าค่าของ prop เป็น `false` แล้วคอมโพเนนท์จะไม่แสดงผล:

```javascript{2-4,29}
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Page />);
```

[**ทดลองบน CodePen**](https://codepen.io/gaearon/pen/Xjoqwm?editors=0010)

การคืนค่า `null` จากเมธอด `render` ในคอมโพเนนท์นั้น จะไม่ส่งผลกระทบต่อการทำงานของ lifecycle method ของคอมโพเนนท์ เช่น เมธอด `componentDidUpdate` จะถูกเรียกใช้อยู่ดี เป็นต้น
