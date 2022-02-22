/**
题目:设计一种结构，该结构有以下三个功能
1.insert(key),将某个key加入到该结构中，做到不重复加入
2.delete(key),将原本结构中的key删除
3.getRandom(),等概率随机返回结构中的任意一个key
【要求】insert，delete，getRandom的时间复杂度为O(1)
*/

class hashCons {
  constructor() {
    this.map1 = new Map();
    this.map2 = new Map();
    this.size = 0;
  }
  insert(key) {
    if (!this.map1.has(key)) {
      this.map1.set(key, this.size);
      this.map2.set(this.size++, key);
    }
  }
  getRandom() {
    if (this.size == 0) {
      return null;
    }
    const num = parseInt(Math.random() * this.size);
    return this.map2.get(num);
  }
  delete(key) {
    if (this.map1.has(key)) {
      const index = this.map1.get(key);
      //删除key位置的数据
      this.map1.delete(key);
      this.map2.delete(index);
      const lastKey = --this.size;
      const value = this.map2.get(lastKey);
      //迁移最后一位的数据到key位置，保证数据的连续性，这样才能保证getRandom可用
      this.map1.delete(value);
      this.map2.delete(lastKey);
      this.map1.set(value, index);
      this.map2.set(index, value);
    }
  }
}

const ha = new hashCons();
ha.insert("a");
ha.insert("b");
ha.insert("c");
ha.insert("d");
ha.delete("a");
console.log(ha);
console.log(ha.getRandom());
