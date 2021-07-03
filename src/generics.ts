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
  find(item){
      return this.items.filter(i=>i==item);
  }
  //
  printAll() {
    this.items.forEach((i) => {
      console.log(i);
    });
  }
  //
}
