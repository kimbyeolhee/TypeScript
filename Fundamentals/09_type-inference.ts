// 타입 추론: 타입을 따로 지정하지 않더라도 a는 string으로 간주된다. 이렇게 변수를 선언하거나 초기화 할 때 타입이 추론된다.
var a = 'abc';

function getB(b = 10) {
    var c = 'au revoir';
    return b + c;
}

// 인터페이스와 제네릭을 이용한 타입 추론 방식
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: 'deep',
    title: 'Book',
};


// 복잡한 구조에서의 타입 추론 방식
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<number> = {
    title: 'LR',
    description: 'ML',
    value: 'Regularization', // <number> 로 설정했기 때문에 ERROR 발생
    tag: 'study', // <number> 로 설정했기 때문에 ERROR 발생
};


// Best Common Type : Union으로 타입을 묶어 나간다.
var arr = [1,2, true, 'abc'];



