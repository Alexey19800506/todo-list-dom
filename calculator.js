export const calc = expression => {
    if (typeof expression !== 'string') {
        return null;
    }

    const [a, operation, b] = expression.split(' ');
    let result;

    switch (operation) {
        case '+':
            result = +a + +b;
            break;
        case '-':
            result = +a - +b;
            break;
        case '*':
            result = +a * +b;
            break;
        case '/':
            result = +a / +b;
            break;
    }

    return `${expression} = ${result}`;
};

export const getSquaredArray = numbers =>
    numbers.map(num => num * num);

export const getOddNumbers = numbers =>
    numbers.filter(num => (num % 2 === 1));

export default (a, b) => a + b;

export const getMinSquaredNumber = numbers => {
    if (!Array.isArray(numbers || numbers.length == 0)) {
        return null;
    }
    let min = Infinity;
    for (let key in numbers) {
        if (Math.abs(numbers[key]) < min) {
            min = Math.abs(numbers[key]);
        }
    }
    return min * min;
}