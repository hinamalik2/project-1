export class User {
    id: number;
    name: string;
    age: number;
    weight: number;
    height: number;

    constructor(id: number, name: string, age: number, weight: number, height: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    getBMI(): number {
        return this.weight / ((this.height / 100) ** 2);
    }

    getProfile(): object {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            weight: this.weight,
            height: this.height,
            bmi: this.getBMI()
        };
    }
}