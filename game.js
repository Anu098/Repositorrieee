class Game{
constructor(){

}
    startGame(){
    console.log("startGame");
   // await this.getGameState();
    if(gaming===1){
        player= new Player();
        player.getCount();  
    form=new Form();
    form.display();

    }
    car95=createSprite(100,100,50,50);
    car96=createSprite(200,100,50,50);
    car100=createSprite(300,100,50,50);
    arrayCar= [car95, car96, car100];
}
playGame(){
    //if(){
            
    //}
console.log("playGame");
form.hide();
Player.getAllPlayers();
if(allPlayers!= null){
var index=0;
var x=200;
var y=0;
for(var obj in allPlayers){
index= index+1;
x=x+100;
y=allPlayers[obj].distance;
//allPlayers[obj].name;
arrayCar[index-1].x=x;
arrayCar[index-1].y=y;
arrayCar[index-1].visible=true;
}
}
}
endGame(){



}
 async getGameState(){
var gamingref= await covid.ref("gameState")
gamingref.on("value",async function(data){
    gaming= await data.val();
   // this.startGame();
  console.log(gaming);  
});
}
updateGameState(count){
var gamingref=covid.ref("/");
gamingref.update({
    gameState: count
})

}
}

