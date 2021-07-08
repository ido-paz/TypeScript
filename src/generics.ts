class Collection<T> {
  private items: T[]=[];
  add<T>(item) {
    this.items.push(item);
  }
  remove(item): T {
    let index = this.items.indexOf(item);
    if (index > -1) {
      let foundItem = this.items[index];
      this.items = this.items.filter((i) => i != foundItem);
      return foundItem;
    }
    return null;
  }
  //
  find(item):T[]{
      return this.items.filter(i=>i==item);
  }
  //
  get():T[]{
    return this.items;
  }
  //
  printAll():void {
    this.items.forEach((i) => {
      console.log(i);
    });
  }
}
//
function clone<T>(value:T):T {
  let str = JSON.stringify(value)
  return JSON.parse(str);  
}
//
