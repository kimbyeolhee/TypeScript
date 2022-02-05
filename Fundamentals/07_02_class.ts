class Person {
    private name: string; // class 내부에서만 사용할 경우 private
    public age: number;
    readonly log: string; // 읽기만 가능 readonly

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

