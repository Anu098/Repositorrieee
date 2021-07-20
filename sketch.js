var covid;
var pinkBush;
var gaming=1;
var batterySaver, form, player;
var car95, car96, car100;
var arrayCar=[];
var allPlayers;
function setup(){
createCanvas(600, 600)
covid=firebase.database();
batterySaver=new Game();
batterySaver.getGameState();
player=new Player();
//console.log(gaming);
//setTimeout(batterySaver.startGame(), 10000);
batterySaver.startGame();


}
function draw(){
    batterySaver.getGameState();
    player.getCount();

if(pinkBush===3 && gaming===1){
batterySaver.updateGameState(2);

}
if(gaming===2){
batterySaver.playGame();

}

}