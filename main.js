// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()


//Create your objects
let hallway = new Room("hallway", "It's fancy right here");
let garage = new Room("garage", "So much dust inside");
let bedroom = new Room("bedroom", "Looks comfortable");
let kitchen = new Room("kitchen", "I'm hungry!");
let playroom = new Room("playroom", "Who's down for a fifa game?");
let bathroom = new Room("bathroom", "It's smelly");
let vase = new Item("vase", "Made of blue glass, chipped on top. Filled with a dark liquid.")
let car = new Item("car", "A ford black car, scrashed from the side");
let shovel = new Item("shovel", "Made of wood. Filled with dust");
let bed = new Item("bed", "Soft red bed, queen size");
let desk = new Item("desk", "Metalic desk, lots of books and papers");
let fridge = new Item("fridge", "Small, white fridge. Eggs and cheese inside");
let microwave = new Item("microwave", "Tiny, grey microwave. It's broken!");
let playstation = new Item("playstation", "Playstation 4, slim, 2 controllers. It has fifa inside");
let chess = new Item("chess", "Made of glass, 2 chairs on the side");
let bathtub = new Item("bathtub", "Dirty");
let mirror = new Item("mirror", "Huge cracked mirror,");

hallway.addItem(garage)
hallway.addItem(bedroom)
hallway.addItem(kitchen)
hallway.addItem(playroom)
hallway.addItem(bathroom)
hallway.addItem(vase)
garage.addItem(car)
garage.addItem(shovel)
bedroom.addItem(bed)
bedroom.addItem(desk)
kitchen.addItem(fridge)
kitchen.addItem(microwave)
playroom.addItem(playstation)
playroom.addItem(chess)
bathroom.addItem(bathtub)
bathroom.addItem(mirror)

mirror.kick = function () {
  addLine("The mirror breaks.");
}
vase.kick = function () {
  addLine("The vase breaks.");
}
shovel.kick = function () {
  addLine("The shovel breaks.");
}
car.kick = function () {
  addLine("The car scratches.");
}

// Put them in their spots
player.move(hallway);

//1.) Create the function & the search term
let sneakaction = /sneak/;
let sneak = function(action, player, object) {
  if (action == 'sneak') {
    let text = "";
    addLine("You are moving slow.");
  }
  return player
}
addAction(sneakaction, sneak);

let runaction = /run/;
let run = function(action, player, object) {
  if (action == 'run') {
    let text = "";
    addLine("You are sweaty.");
  }
  return player
}
addAction(runaction, run);

//To create a function that interacts with an object...
let kickAction = /kick/;
let kick = function(action, player, object) {
  if (action == 'kick') {
    try {
      throw object.kick();
    }
    catch(err) {
      addLine("Your foot hurts.")
    }
  }
  return player;
}
addAction(kickAction, kick);
