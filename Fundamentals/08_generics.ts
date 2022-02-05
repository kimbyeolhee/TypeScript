// Generic은 C#, java 등의 언어에서 재사용 높은 컴포넌트를 만들 떄 자주 활용되는 특징이다.

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

logText('Hello'); // string으로 추론
logText<string>('Salut'); // string type으로 직접 설정


// 기존 타입 정의 방식과 Generics의 차이점
  // 기존 타입 정의 방식 - 동일한 코드를 중복으로 선언해야 하는 문제점
function logText(text: string) {
    console.log(text);
    return text;
}
logText('a');
logText(10); // Error
logText(true); // Error

function logNumber(text: number) {
    console.log(text);
    return text;
}
logNumber('a'); // Error
logNumber(10)
logNumber(true); // Error

  // 유니온 타입 정의 방식
function logText(text: string | number) {
    console.log(text);
    return text;
}
const a = logText('a');
a.split(''); // Error : string으로 정확하게 정의된 것이 아니라 number일 수도 있어서 split을 사용할 수 없다.
logText(10);

  // Generics
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const abc = logText<string>('abc');
abc.split('') // string으로 정확하게 정의된 것이므로 split을 사용할 수 있다.

const login = logText<boolean>(true); // 각각 정의하는 것이 아니라 호출하는 시점에서 타입 정의


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value : 'abc', selected : true };
const obj: Dropdown<number> = { value : 10 , selected : true };


// Generic의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length); // T뒤에 []를 붙여 타입에 대한 힌트를 조금 더 준다고 생각하면 된다.
  return text;
}

logTextLength(['bonjour']);


// Generic 타입 제한2 - 정의된 타입 이용
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('mange'); // ok
logTextLength(10); // 숫자 10의 내부 속성에는 length가 제공되지 않기 때문에 ERROR


// Generic 타입 제한3 - keyof: key값만 들어갈 수 있다.
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getItemOption(10); // Error
getItemOption("name"); // ok
