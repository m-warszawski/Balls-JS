function log<T>(target: T) {
    return target;
}

@log
export class Deco {
    private header: HTMLElement;
    private prev: HTMLElement;
    constructor() {
        this.header = document.createElement("h1");
        this.header.id = "header";
        this.header.innerHTML = "GRA KULKI";
        this.prev = document.createElement("div");
        this.prev.id = "prev";
    }

    //Napis h1
    napis() {
        return this.header;
    }

    //Div na prev kul
    poprz() {
        return this.prev;
    }
}