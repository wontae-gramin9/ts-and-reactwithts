// JS에서는 #privateVariable/method로 private을 선언할 수 있었지만
// public, readonly 키워드는 따로 없었다.
class Bar {
  // TS에서는 JS와 달리 생성자의 멤버변수를 미리 선언하거나,

  color: string;
  constructor(
    // arg 앞에 public or readonly 키워드를 선언해서 에러를 막을 수 있다
    // public color: string
    // readonly color: string
    color: string
  ) {
    this.color = color;
  }
  bar() {
    console.log("start");
  }
}

// 그러나 TS에서는 private이외의 접근제한자(public, protected)도 지원한다
class Dar {
  driver = "wontae"; // 아무런 키워드가 없으면 모두 public
  static wheels = 4;
  // protected: 외부에서는 참조불가, 자식클래스에서는 참조가능
  protected name: string = "car";
  readonly new = true;
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

class Dmw extends Dar {
  constructor(color: string) {
    super(color);
  }
  showName() {
    // Class field 'name' defined by the parent class is not accessible in the child class via super.
    // console.log(super.name);
    super.start(); // 부모클래스의 메소드(and constructor)는 super로 접근가능하지만
    console.log(this.name); // 부모클래스의 필드는 this로 접근한다.
  }
}

const z7 = new Dmw("black");
// z7.new = false; // readonly는 접근 가능하나 수정 불가

// ABSTRACT CLASS
// Instantiaction 불가. 오직 상속으로 가능
abstract class Ear {
  abstract hear(): void; // 반드시 상속받은 자식이 implement함
}
