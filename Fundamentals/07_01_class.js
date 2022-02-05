// 클래스
class Person {
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}

var jh = new Person('재훈', 23); // 생성 되었습니다.
console.log(jh); // Person {name: '재훈', age: 23}

// 프로토타입
var user = { name: 'kbh', age: 25 };
var admin = { name: 'kbh', age: 25, role: 'admin' }; // 속성이 중복됨을 알 수 있다.

// 프로토타입을 이용한 상속
var admin = {};
admin.__proto__ = user;
admin.name // 'kbh'
admin.age // 25

admin.role = 'admin'; // 속성 추가


// 생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var bh = new Person('별희', 25);


