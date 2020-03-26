class myClass {
    constructor(x,y) {
        this.val1 = x;
        this.val2 = y;
    }

    foo() {
        console.log(`val1: ${this.val1}`);
        console.log(`val2: ${this.val2}`);
        console.log(`val3: ${this.getKey()}`);
    }

    async getKey(){
        const resp = await fetch('local.json')
            .then(r => r.json());
        return resp;
    }
}

const cl = new myClass("one","two");
cl.foo();

