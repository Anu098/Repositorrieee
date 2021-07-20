class Form{
constructor(){
this.input= createInput("Hehi Chicken");
this.button=createButton("Cappy");
this.texty=createElement("h2");
}
display(){
    console.log("entered");
var title=createElement("h3","Race to the First");
title.position(width/2-100,47);
    //var input=createInput("Hehi Chicken")
    this.input.position(width/2-100,height/2-100);
    //var button=createButton("Cappy")
   this.button.position(width/2-50,height/2-50);
   this.button.mousePressed( ()=>{
     //var name= input.value();
     //player= new Player();
     //player.getCount();
     pinkBush= pinkBush+1;
    player.name= this.input.value();

    player.id=pinkBush;
    player.updateCount(pinkBush);
    player.updatePlayer();
    this.input.hide();
    this.button.hide();
    this.texty.html("WELCOME   "+this.input.value());
    this.texty.position(width/2-100,height/2-100);

    })
} 
hide(){
    this.input.hide();
    this.button.hide();
    this.texty.hide();


    
}
 
}