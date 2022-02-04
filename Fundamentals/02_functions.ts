// 함수의 파라미터에 타입을 정의
function sum(a: number, b: number) {
    return a + b;
}
sum(10, 20);


// 함수의 반환 값에 타입을 정의
function add(): number {
    return 16;
}


// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b;
}


// 함수의 옵셔널 파라미터 '?'를 붙여서 필요에 따라 인자를 전달
function log(a: string, b?: string, c?: string) {

}
log('hello');
log('hello', 'world');


// REST 문법 적용
function sum3(a: number, ...nums: number[]) {
    const totalNums = 0;
    for (let key in nums) {
        totalNums += nums[key];
    }
    return a + totalNums;
}
