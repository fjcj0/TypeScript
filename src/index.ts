interface Book {
    itemType: string;
    title: string;
    isbn: number;
}

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

class Collection<T> {
    public data: T[] = [];

    add(item: T): void {
        this.data.push(item);
    }
}

console.log("Course is finished {mastered typescript}!!");