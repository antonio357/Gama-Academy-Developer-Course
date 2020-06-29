var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character(name) {
        this.name = name;
    }
    Character.prototype.getName = function () {
        return this.name;
    };
    return Character;
}());
var MajorCharacter = /** @class */ (function (_super) {
    __extends(MajorCharacter, _super);
    function MajorCharacter(name) {
        return _super.call(this, name) || this;
    }
    MajorCharacter.prototype.speak = function () {
        console.log("Hay, I'm " + this.getName());
    };
    MajorCharacter.prototype.atack = function () {
        console.log("Master Sword Smash");
    };
    MajorCharacter.prototype.defend = function () {
        console.log("Hilyan Shiled Block");
    };
    return MajorCharacter;
}(Character));
var majorCharactersArrayByInterface = [new MajorCharacter('Link'), new MajorCharacter('Zelda'), new MajorCharacter('Ganondorf')];
var majorCharactersArrayByClass = [new MajorCharacter('Link'), new MajorCharacter('Zelda'), new MajorCharacter('Ganondorf')];
function polymorfismByInterface() {
    console.log("polymorfismByInterface -> polymorfismByInterface", polymorfismByInterface);
    majorCharactersArrayByInterface.forEach(function (character) {
        character.speak();
    });
}
function polymorfismByClass() {
    console.log("polymorfismByClass -> polymorfismByClass", polymorfismByClass);
    majorCharactersArrayByClass.forEach(function (character) {
        character.speak();
        character.atack();
        character.defend();
    });
}
polymorfismByClass();
polymorfismByInterface();
