/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  add(value, position) {
    let node = {
      _value: value,
      _next: null,
    };

    if (position === 0) {
      node._next = this._head;
      this._head = node;
    } else {
      let prev = this.get(position - 1);
      let current = prev._next;
      node._next = current;
      prev._next = node;
    }

    this._length++;
  }

  get(position) {
    if (position >= this._length) {
      console.log("out of range");
    }

    let current = this._head;
    for (let i = 0; i < position; i++) {
      current = current._next;
    }

    return current;
  }
}

let linked1 = new LinkedList();
let linked2 = new LinkedList();

linked1.add(2, 0);
linked1.add(4, 1);
linked1.add(3, 2);

linked2.add(5, 0);
linked2.add(6, 1);
linked2.add(4, 2);

var getNmber = function (arr) {
  let val = "";

  for (var j = 0; j < arr.length; j++) {
    val += arr[j];
  }

  return parseInt(val);
  //return val;
};

/**
 * @param {ListNode}
 * @param {ListNode}
 * @return {ListNode}
 */
var addTwoNumbers = function (firstlinkedlist, secondlinkedlist) {
  let first = [],
    sec = [];

  for (let j = 0; j < linked1._length; j++) {
    first.push(linked1.get(j)._value);
  }

  for (let k = 0; k < linked2._length; k++) {
    sec.push(linked2.get(k)._value);
  }

  //   console.log("first", getNmber(first.reverse()));
  //   console.log("sec", sec.reverse().concat(""));

  let total = getNmber(first.reverse()) + getNmber(sec.reverse());

  let toalitemarr = [];

  totalstr = total.toString();

  for (var n = 0; n < totalstr.length; n++) {
    if (n < totalstr.length) {
      toalitemarr.push(parseInt(totalstr.slice(n, n + 1)));
    }
  }

  let newtotalitemarr = toalitemarr.reverse();

  let reslinked = new LinkedList();

  for (var m = 0; m < newtotalitemarr.length; m++) {
    reslinked.add(newtotalitemarr[m], m);
  }

  return reslinked;
};

let result = addTwoNumbers(linked1, linked2);

console.log("result", JSON.stringify(result));

// console.log(JSON.stringify(linked1));
// console.log(JSON.stringify(linked1));

// console.log(linked1._length);

// for (let j = 0; j < linked1._length; j++) {
//   console.log("linked1 item:", linked1.get(j));
// }

// for (let j = 0; j < linked2._length; j++) {
//   console.log("linked2 item:", linked2.get(j));
// }
