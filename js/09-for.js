console.clear();
/*
FOR - loop, ciklas
*/

const marks = [10, 2, 8, 4, 6];
const count = marks.length;

let sum = 0;
let index = 0;

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);


const average = sum / count;
console.log('Vidurkis:', average);