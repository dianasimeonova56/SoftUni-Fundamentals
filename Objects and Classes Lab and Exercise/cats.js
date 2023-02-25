function parseCats(arr) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let catsArr = [];
    for (let catAsString of arr) {
       let tokens = catAsString.split(' ');
       let cat = new Cat(tokens[0], Number(tokens[1]));
       catsArr.push(cat);
    }
    for (let cat of catsArr) {
        cat.meow();
    }
}

//for (let i = 0; i < arr.length; i++) {
   // let catData = arr[i].split(' ');
   // let name, age;
    //[name, age] = [catData[0], catData[1]];
    //catsArr.push(new Cat(name, age))
//}

//for (let )
