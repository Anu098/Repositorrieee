class Player{
constructor(){
this.id=0;
this.name="empty";
this.distance=0;
}
 async getCount(){
var playerref= await covid.ref("playerCount");
playerref.on("value",function(data){
pinkBush= data.val();

});
}
updateCount(count){
var playerref= covid.ref("/")
playerref.update({
    playerCount:count
});
}
updatePlayer(){
var index="players/player"+this.id
var linusref=covid.ref(index); 
linusref.update({
    name:this.name,
    id:this.id,
    distance:this.distance
});

}
static getAllPlayers(){
//var playerref= covid.ref("playe")

var playerref= covid.ref("players");
playerref.on("value", function(data){
    allPlayers= data.val();
})
}
}