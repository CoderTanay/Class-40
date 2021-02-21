var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var finishedPlayers = 0;

var form, player, game;

var passedFinish = false;

var cars, car1, car2, car3, car4;
var car1i, car2i, car3i, car4i, track, ground;
var first, second, third;

function preload(){
car1i = loadImage("images/car1.png")
car2i = loadImage("images/car2.png")
car3i = loadImage("images/car3.png")
car4i = loadImage("images/car4.png")
track = loadImage("images/track.jpg")
ground = loadImage("images/ground.png")
first = loadImage("images/1st.png")
second = loadImage("images/2nd.png")
third = loadImage("images/3rd.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
  if(finishedPlayers === 4){
    game.update(2);
  }
  if(gameState === 2 && finishedPlayers ===4){
    clear();
    game.displayRanks();
  }
}