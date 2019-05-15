'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return its value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  /**
   * //  Add item to the beginning of the list and return its value
   * @returns {*}
   */
  shift() {
    const newArray = [];
    for (let i = 0; i < this.data.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      newArray.push(this.data[i]);
    }
    return newArray;
  }

  /**
   * //  Remove item from the beginning of the list and return its value
   * @returns {*}
   */

  // unshift() {
  //   for (let i = this.data.length; i >= 0; i--) {
  //     this.data[i +1] = this.data[i];
  //   }
  //   this.data[0] =
  // }

  forEach(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i]);
    }
  }
}

module.exports = List;
