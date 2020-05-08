class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`To jest ${this.name} i ma moc ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log("Mag bojowy", this);
    }
    play() {
        console.log(`Wielka moc drzemie w ${name}, niech stanie siê ${type}`);
    }
}

const mag1 = new Wizard('Ania', 'Czarny wojownik');

//###########################################################################
//class Animal {
//    constructor(name, type, color) {
//        this.name = name;
//        this.color = color;
//        this.type = type;
//    }
//}

//class Mamal extends Animal {
//    constructor(name, type, color) {
//        super(name, type, color)
//    }
//    sound() {
//        console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
//    }
//}

//const cow = new Mamal('Shelly', 'cow', 'brown');