interface Speaker {
    speak(): void
}

interface Fither {
    atack(): void,
    defend(): void
}

class Character {
    constructor(private name: string) {}
    protected getName(): string {
        return this.name
    }
}

class MajorCharacter extends Character implements Speaker, Fither {
    constructor(name: string) {
        super(name)
    }
    speak() {
        console.log(`Hay, I'm ${this.getName()}`)
    }
    atack() {
        console.log(`Master Sword Smash`)
    }
    defend() {
        console.log(`Hilyan Shiled Block`)
    }
}

const majorCharactersArrayByInterface: Speaker[] = [new MajorCharacter('Link'), new MajorCharacter('Zelda'), new MajorCharacter('Ganondorf')]
const majorCharactersArrayByClass: MajorCharacter[] = [new MajorCharacter('Link'), new MajorCharacter('Zelda'), new MajorCharacter('Ganondorf')]

function polymorfismByInterface() {
    console.log("polymorfismByInterface -> polymorfismByInterface", polymorfismByInterface)
    majorCharactersArrayByInterface.forEach(character => {
        character.speak()
    });
}
function polymorfismByClass() {
    console.log("polymorfismByClass -> polymorfismByClass", polymorfismByClass)
    majorCharactersArrayByClass.forEach(character => {
        character.speak()
        character.atack()
        character.defend()
    });
}

polymorfismByClass()
polymorfismByInterface()

// adding new line 
