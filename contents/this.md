---
date: '2023-02-10'
title: 'this 정리'
categories: ['JavaScript', '딥다이브']
summary: '자기 참조 변수인 this에 대해 알아보고 정리하자!'
thumbnail: './JS.png'
---

# this

### 22.1 this 키워드

> `메서드`가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.

- 객체 리터럴 방식으로 생성한 경우 메서드 내부에서 자기 자신이 속한 객체를 재귀적으로 참조할 수 있다.
- getDiameter가 호출될 시점에는 이미 circle 객체가 만들어져 있기 때문에 해당 동작이 가능하다!
- 하지만 이것은 일반적이지 않으며 바람직하지도 않다.

```jsx
const circle = {
  radius: 5,
  getDiameter() {
    return 2  circle.radius;
  },
};

console.log(circle.getDiameter()); // 10
```

- 생성자 함수 방식으로 인스턴스를 생성하는 경우
  - 생성자 함수 또한 내부에서 프로퍼티나 메서드를 추가하기 위해 자신이 생성할 인스턴스를 참조할 수 있어야 한다.
  - 생성자 함수를 정의하고, new 연산자와 함께 생성자 함수를 호출해야 하는 단계가 추가로 필요하다.
  - 따라서 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수가 존재해야 한다.
  - 생성자 함수를 정의하는 시점에는 아직 new 연산자로 인스턴스를 생성하기 이전이므로 해당 인스턴스를 가리키는 식별자를 알 수 없다.
  - 따라서 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 특수한 식별자가 필요하다
  - 이게 this이다.

```jsx
  function Circle(radius) {
    ????.radius = radius;
  }

  Circle.prototype.getDiameter = function () {
    return 2  ???.radius;
  }

  const circle = new Circle(5);

```

```
💡 그래서 this는 무엇인가?
- 자신이 속한 개체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.
- this를 통해 자신이 속한 객체 또는 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
- this는 자바스크립트 엔진을 통해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다.
- 함수를 호출하면, arguments 객체와 this가 암묵적으로 함수 내부에 전달된다. 또한 지역변수처럼 사용 가능하다.
- 단, this가 가리키는 값. 즉, this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.
```

- 객체 리터럴의 메서드 내부에서의 this는 메서드를 호출한 객체. 즉, circle을 가리킨다.
- 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
- 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉. this 바인딩이 동적으로 결정된다.
- strict모드도 this바인딩에 영향을 준다.
- 정리를 해보면 this 바인딩은 함수가 호출되는 시점에 자바스크립트 엔진을 통해 암묵적으로 생성된다.

##### 🔎 용어 모음집

1. 인스턴스란? new 키워드를 붙여 생성하는 클래스의 복제본을 말한다.
   => const a = new Number(1); 인 경우 a는 Number 인스턴스가 된다.
2. 바인딩이란? 식별자와 값을 연결하는 과정
   => 변수 선언은 변수 이름(식별자)와 확보된 공간의 주소를 바인딩하는 것이다.
   => this 바인딩은 this(키워드로 분류되지만 식별자 역할도 함)와 this가 가리킬 객체를 바인딩하는 것이다.

### 22.2 함수 호출 방식과 this 바인딩

> this 바인딩은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동저긍로 결정된다. > \\ Tips. 렉시컬 스코프는 객체 생성 시점에, this 바인딩은 함수 호출 시점에 결정된다.

- 함수 호출 방식은 다양하다
  1. 일반 함수 호출
  2. 메서드 함수 호출
  3. 생성자 함수 호출
  4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

```jsx
const foo = function () {
  console.dir(this);
};

// 1. 일반 함수 호출
foo();
// window

// 2.메서드 호출

const obj = { foo };

obj.foo();
// obj

//3.생성자 함수 호출

new foo();
// foo{}
//4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

const bar = { name: 'bar' };

foo.call(bar);
// bar

foo.apply(bar); // bar
foo.bind(bar)(); // bar
```

#### 22.2.1 일반 함수 호출

> 기본적으로 this에는 전역 객체가 바인딩 된다.

- 전역함수는 물론이고, 중첩 함수를 일반함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩된다.

```jsx
function foo() {
  console.log("foo's this:", this);

  function bar() {
    console.log("bar's this:", this);
  }

  bar(); // window
}

foo(); // window
```

- 여기서, this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수임으로, 일반함수에서 this는 의미가 없다!

- 따라서, strict 모드가 적용된 일반 함수의 this에서는 undefined가 바인딩된다.

```jsx
var value = 10;

const example = {
  value: 100,

  method() {
    console.log(this); // example 객체 {value: 100, method: f}
    console.log(this.value); // 100
    function inner() {
      console.log(this);
      // window
      console.log(this.value);
      // 10
    }

    setTimeout(function () {
      console.log(this);
      // window
      console.log(this.value);
      // 10
    }, 100);

    inner();
  },
};

example.method();
```

- 콜백함수가 일반 함수로 호출된다면 콜백 함수 내부의 this에도 전역객체가 바인딩된다.
  => 어떤 함수라도 일반 함수로 호출한다면 this에 전역객체가 바인딩 된다.
  => 이렇게되면 어떤 문제가 생길까요?
  => 외부함수인 메서드와 중첩함수나 콜백함수 같은 헬퍼 함수의 this가 일치하지 않게 된다.
  => 이렇게 되면 헬퍼 함수의 역할을 제대로 못하게 된다.
- 해결방안 => 밑의 방법, Function.Prototype.call,aplly,bind 등

```jsx
var value = 1;
const obj = {
  value: 100,
  foo() {
    const that = this;
    setTimeout(
      function () {
        console.log(that.value);
        // 1번
        console.log(this.value);
        // 2번
      }.bind(this),
      100,
    );
    //아니면 화살표 함수를 사용하는 방법도 있다.
    setTimeout(() => console.log(this.value), 100);
  },
};
```

---

#### 22.2.2 메서드 호출

메서드 내부의 this에는 메서드를 호출한 객체. 즉, 메서드를 호출할 때 .\ 연산자 앞에 붙은 객체가 바인딩 된다.

- 메서드는 객체에 포함된 것이 아니라, 독립적으로 존재하는 별도의 객체다.
- 따라서, getName 프로퍼티가 가리티는 함수객체인 getName 메서드는 할당이 가능하다.
- 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될 수도 있다.
- 일반 변수에 할당하여 일반 함수로 호출될 수도 있다.
- 이 함수 객체는 함수 호출시에 어떤 객체에 this가 바인딩 될 것인지 정한다.

#### 22.2.3 생성자 함수 호출

> 생성자 함수 내부의 this에는 생성자 함수가 생성할 인스턴스가 바인딩된다.

#### 22.2.4 Function.prototyppe.apply/call/bind 메서드에 의한 간접 호출

- apply와 call

- apply와 call 메서드의 본질적인 기능은 함수를 호출하는 것이다.

- 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.
