// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.

interface PersonInterface {
    name: string;
    age: number;
}

type PersonTyoe {
    name: string;
    age: number;
}

var jaehoon: PersonInterface = {
    name: '재훈',
    age: 22,
}

var jaehoon2: PersonTyoe = {
    name: '재훈',
    age: 22,
}

// type vs interface
// 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능/불가능 여부이다.
// 인터페이스는 확장이 가능하지만 타입 별칭은 확장이 불가능하다.
// 좋은 소프트웨어는 언제나 확장이 용이해야 하므로 가능한 확장 가능한 인터페이스로 선언하자.
