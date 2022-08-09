// LRU 英文全称是 Least Recently Used，英译过来就是”最近最少使用“的意思。
// 假如我们有一块内存，专门用来缓存我们最近发访问的网页，访问一个新网页，我们就会往内存中添加一个网页地址，随着网页的不断增加，内存存满了，这个时候我们就需要考虑删除一些网页了。这个时候我们找到内存中最早访问的那个网页地址，然后把它删掉。
// 这一整个过程就可以称之为 LRU 算法

// 特点分析：

// 我们需要一块有限的存储空间，因为无限的化就没必要使用 LRU 算发删除数据了。
// 我们这块存储空间里面存储的数据需要是有序的，因为我们必须要顺序来删除数据，所以可以考虑使用 Array、Map 数据结构来存储，不能使用 Object，因为它是无序的。
// 我们能够删除或者添加以及获取到这块存储空间中的指定数据。
// 存储空间存满之后，在添加数据时，会自动删除时间最久远的那条数据。

// 实现需求：

// 实现一个 LRUCache 类型，用来充当存储空间
// 采用 Map 数据结构存储数据，因为它的存取时间复杂度为 O(1)，数组为 O(n)
// 实现 get 和 set 方法，用来获取和添加数据
// 我们的存储空间有长度限制，所以无需提供删除方法，存储满之后，自动删除最久远的那条数据
// 当使用 get 获取数据后，该条数据需要更新到最前面

class LRUCache {
  constructor(length){
    this.length = length   // 长度
    this.data = new Map()  // 数据
  }
  set(key, value){
    const data = this.data
    if(data.has(key)){
      data.delete(key)
    }
    data.set(key, value)
    // 超出长度删除最老的数据
    if(data.size > this.length){
      const delKey = data.keys().next().value
      data.delete(delKey)
    }

  }
  get(key){
    const data = this.data
    if(!data.has(key)){
      return null
    }
    const value = data.get(key)
    data.set(key, value)
    return value
  }
}