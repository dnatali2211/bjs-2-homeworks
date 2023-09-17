'use strict';

function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение")
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if (this.sideA + this.sideB <= this.sideC || this.sideA + this.sideC <= this.sideB || this.sideB + this.sideC <= this.sideA) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

    }
    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    get area() {
        const p = this.perimeter / 2;
        return +Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3);
    }

}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}