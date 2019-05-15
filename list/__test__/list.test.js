'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {
  it('starts with a length of 0 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('deletes the last item in the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
  });

  it('returns first value out of data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.data[0]).toEqual('a');
  });

  it('shifts all values in data set up an index', () => {
    let stuff = new List();
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    let result = stuff.shift();
    expect(result[0]).toEqual('c');
    expect(result[1]).toEqual('d');
  });

  xit('deletes the first item in the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(result).toEqual('a');
  });

  describe('forEach', () => {
    it('should take in a callback', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      expect(() => stuff.forEach(() => {})).not.toThrow();
    });

    it('should only accept a callback as its argument', () => {
      let stuff = new List();
      stuff.push('a');
      stuff.push('b');
      expect(() => stuff.map('a')).toThrow();
    });
  });
});
