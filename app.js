// Global Variables
const form = document.getElementById("dino-compare");
const grid = document.getElementById("grid");
const btn = document.getElementById("btn");


// Dino Data from json copy paste

var dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": 372,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]




    // Create Dino Constructor ---- unnecessary due to json data copy&paste
function Dino(species,weight,height,diet,where,when,fact,image) {
    this.specis = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = image;
}

    // Create Dino Objects ---- unnecessary due to json data copy&paste

 
    // Create Human Object

var human = { "species" : "Human"};

    // Use IIFE to get human data from form

let getHumanData = (function() {
    human.name = form.name.value;
    human.height = parseInt(form.feet.value) * 12 + parseInt(form.inches.value);
    human.weight = parseInt(form.weight.value);
    human.diet = form.diet.value.toLowerCase();

        // Add human to Dino Array

        dinos.splice(4, 0, human);

    console.log("human data added");
    return human;


});






    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
let heightCompare = (function(){
    dinos.forEach(function compareHeight(index) {
        if (index.height === human.height) {
            index.comparisonResult = "This Dino and you are of the same height. You are both " + index.height + "inches tall."
        }
        else {
            if (index.height > human.height) {
                index.comparisonResult = "Dino is " + (index.height - human.height) + " inches taller than you."
            }
            else {
                index.comparisonResult = "You are taller than this dino! This dino is only " + index.height + " inches tall."
            }
        }
    console.log("Height comparison finished for " + index.species);
    })
});
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
let weightCompare = (function(){
    dinos.forEach(function compareWeight(index) {
        if (index.weight === human.weight) {
            index.comparisonResult = "This Dino and you are of the same weight. You are both " + index.weight + "lbs in weight."
        }
        else {
            if (index.weight > human.weight) {
                index.comparisonResult = "Dino is " + (index.weight - human.weight) + " lbs heavier than you."
            }
            else {
                index.comparisonResult = "You are heavier than this dino! This dino is only " + index.weight + " lbs heavy."
            }
        }
    console.log("Weight comparison finished for " + index.species);
    })
});
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
let dietCompare = (function(){
    dinos.forEach(function compareDiet(index) {
        if (index.diet === human.diet) {
            index.comparisonResult = "This Dino and you are on the same diet. You are both " + index.diet + "s."
        }
        else {
            index.comparisonResult = "This Dino and you are on a different diet. This dino is a " + index.diet + " and you are a " + human.diet + "."
        }
    console.log("diet comparison finished for " + index.species);
    })
});  


    // choose random method to compare -- from https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

function chooseMethod(){
    const comparingMethods = [heightCompare, weightCompare, dietCompare];
    const randomElement = comparingMethods[Math.floor(Math.random() * comparingMethods.length)];
    return randomElement();
};


    // Generate Tiles for each Dino in Array
let showDinos = (function(){

dinos.forEach(function(dino, index) {
    const newDiv = document.createElement('div');
    const newHeading = document.createElement('h3');
    const newImage = document.createElement('img');
    const newPara = document.createElement('p');

   // Add Dino Images
    dino.image = "images\/" + dino.species + ".png"; 


        // Add tiles to DOM

grid.appendChild(newDiv);
grid.children[index].classList.add('grid-item');
grid.children[index].appendChild(newHeading);
grid.children[index].firstChild.innerHTML = dino.species;
grid.children[index].appendChild(newImage);
grid.children[index].lastChild.src = dino.image;

        // add comparison to grid elements

grid.children[index].appendChild(newPara);
grid.children[index].lastChild.innerHTML = dino.comparisonResult;
    })

        // show Human Name
        let humanName = grid.children[4].firstChild;
        humanName.innerHTML = human.name;

        // remove Human fact
        let humanFact = grid.children[4].lastChild;
        humanFact.parentNode.removeChild(humanFact);

        // remove Pigeon fact
        let pigeonFact = grid.lastChild.lastChild;
        pigeonFact.innerHTML = dinos[8].fact;


});


    // Remove form from screen
    function hideForm(form) {
        form.style.display ="none";
    }


// On button click, prepare and display infographic

btn.addEventListener('click', doIt);


        function doIt() {
            getHumanData();
            chooseMethod();
            showDinos();
            hideForm(form);
            console.clear();
            return false;
        };
