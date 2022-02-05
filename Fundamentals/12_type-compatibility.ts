// 타입 호환

// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;

developer = person; // Error => Person은 name 속성밖에 없기 때문에 왼쪽에 선언된 developer와 타입 호환이 되지 않는다.


// 클래스
class Person {
    name: string;
}
developer = new Person() // Error => Person은 name 속성밖에 없기 때문에 왼쪽에 선언된 developer와 타입 호환이 되지 않는다.


// 함수
var add = function(a: number) {
    console.log(a);
}

var sum = function(a: number, b: number) {  // 파라미터의 개수 차이, sum 함수의 구조가 add보다 더 크다.
    console.log(a+b);
}

sum = add; // Compatible
add = sum; // Error


// Generic
interface Empty<T> {
    // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; // 인터페이스 안이 비어있기 때문에 compatible
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; // Error => 타입이 다르기 때문에 타입 호환이 되지 않는다.
