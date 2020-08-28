//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = numbers;

console.log(`array befor bbsort: ${array}`);

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        let position = array[i];
  
        array[i] = array[j];
        array[j] = position;
      }
    }
  }
  
console.log(`array after bb sort: ${array}`);