"use strict";

//Practice ezercise 7.3
//Creating a class for different animal species
class Animals{
    constructor(species, sound){
        this.species = species;
        this.sound = sound;
    }
   
    //A method that prints animal and sound
    animal(){
        console.log(this.species, "it makes a", this.sound, "sound.");
    }
}

//Creating animals
let animal1 = new Animals("Tiger", "Roaring");
let animal2 = new Animals("Lion", "Roar");

//A prototype that adds another action for the animal
Animals.prototype.run = () => "Fast";

// console.log(animal1.run());
//Outputting to the console
animal1.animal();
animal2.animal();