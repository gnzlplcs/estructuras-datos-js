class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  // método para agregar un elemento al final del array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  // método para eliminar un elemento del array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  // método para cambiar el index de un elemento
  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();

myArray.push('Walter');
myArray.push('Catalina');
myArray.push('Diego');
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.pop();
console.log(myArray);