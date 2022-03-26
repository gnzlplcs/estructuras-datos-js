const array = ['Gonzalo', 'Patricia', 'Joaquín', 'Nadia', 'Lía'];

// agregamos un elemento al final del array
array.push('Wanda');

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();

myArray.push('Walter');
myArray.push('Catalina');
console.log(myArray)
