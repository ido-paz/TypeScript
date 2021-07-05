class Collection {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        let index = this.items.indexOf(item);
        if (index > -1) {
            let foundItem = this.items[index];
            this.items = this.items.filter((i) => i != foundItem);
            return foundItem;
        }
        return null;
    }
    //
    find(item) {
        return this.items.filter(i => i == item);
    }
    //
    get() {
        return this.items;
    }
    //
    printAll() {
        this.items.forEach((i) => {
            console.log(i);
        });
    }
}
