
var view={
    message:function(messg){
        var massegeBox=document.getElementById("messageArea");
       
        massegeBox.innerHTML=messg;


    },
    display:function(userInput,bol){

var loc=document.getElementById(userInput);
if(bol){
loc.setAttribute("class","hit");}
else{loc.setAttribute("class","miss");}

    }

};


var model={
    ships :  [{ locations: [], hits: ["", "", ""] },
 { locations: [], hits: ["", "", ""] },
 { locations: [], hits: ["", "", ""] }],
    numShips:3,
    shipsSunk:0,
    boardSize:7,
    shiplenght:3,
    generateShipLocation:function(){
            var newShipLoc;
            for(var i=0;i<this.numShips;i++){
        do {
            var newShipLoc=this.generateShip();
        } while (this.collision(newShipLoc));
            
            this.ships[i].locations=newShipLoc;
    }
    
    },
    generateShip:function(){
       var row;
       var colm;
      var Horzontal=Math.floor(Math.random()*2);
      var ship=[];
      if(Horzontal==1){
        row = Math.floor(Math.random()*(this.boardSize-this.shiplenght));
       colm= Math.floor(Math.random()*(this.boardSize));
       for(var i=0;i<this.shiplenght;i++){
        ship.push(row.toString()+(colm+i).toString());
      }}
      else {
         row = Math.floor(Math.random()*(this.boardSize));
        colm= Math.floor(Math.random()*(this.boardSize-this.shiplenght));
for(var i=0;i<this.shiplenght;i++){
    
        ship.push(row.toString()+(colm+i).toString());
        
}

      }

return ship;

    },
    collision:function(shipLoc){
        for(var i=0;i<this.numShips;i++){
            for(var j=0;j<this.shiplenght;j++){
                if(this.ships[i].locations.indexOf(shipLoc[j])!=-1)return true;
            }
        }
        return false;
        
    },
    fire:function(userInput){
       
       for(var i=0;i<this.numShips;i++){
//console.log(this.ships[i].locations)
        for(var j=0;j<this.shiplenght;j++){
            console.log(this.ships[i].locations[j],userInput)
            if(this.ships[i].locations[j]==userInput){this.ships[i].hits[j]="hit";view.message("Hitt!");view.display(userInput,true);
                if(this.isSunck(this.ships[i])){this.shipsSunk++;view.message("you sank my battleship !");}return true;}
        }
       }
       view.display(userInput,false);
       view.message("Miss!")
       return false;
    },
    isSunck:function(ship){

        for(var i=0;i<this.shiplenght;i++){
            if(ship.hits[i]!="hit")return false ;

    }return true;
}

}
var Controller={
    gusses:0,
    prossess:function(userInput){
        this.gusses++;
        var userans=parseGuess(userInput);
        if(userans!=null){
            var isHit=model.fire(userans);
            if(isHit&&model.shipsSunk==model.numShips){
                view.message("You sank all my battleships, in " + 
        this.gusses + " guesses");
gusse.remove();

            }
        }
    }


}
function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
 if (guess === null || guess.length !== 2) {
 alert("Oops, please enter a letter and a number on the board.");
 } else{
 var first=alphabet.indexOf(guess[0]);
 var row=first
 var colm=guess[1];
 console.log(row,colm)
 if (isNaN(row) || isNaN(colm)) {
 alert("Oops, that isn't on the board.");
 }
else if(row<0||row>model.boardSize||colm<0||colm>model.boardSize)alert("enter a alpha between A and G and a number between 1 and 6")
else {
    return row+colm;
}
 }
 return null;
}



function init(){
model.generateShipLocation()
var gusse=document.getElementById("guessInput");

var butt=document.getElementById("fireButton");
gusse.addEventListener('keypress',function(e){
    console.log(e.value)
    if(e.keyCode===13){e.preventDefault();butt.click()}
    
})
butt.addEventListener("click",function(){
Controller.prossess(gusse.value)
    gusse.value=""
})
}
window.onload=init();










/* Controller.prossess("A0");
Controller.prossess("A6");
Controller.prossess("B6");
Controller.prossess("C6");
Controller.prossess("C4");
Controller.prossess("D4");
Controller.prossess("E4");
Controller.prossess("B0");
Controller.prossess("B1");
Controller.prossess("B2"); */
















/* var scores = [60, 50, 60, 58, 54, 54, 
 58, 50, 52, 54, 48, 69,
 34, 55, 51, 52, 44, 51,
 69, 64, 66, 55, 52, 61,
 46, 31, 57, 52, 44, 18,
 41, 53, 55, 61, 51, 44];
var i=0;
var max=0;
var maxindexes=[]
while(i<scores.length){
  
    console.log("Bubble solution #"+i+" score: "+scores[i]);
    if(max<scores[i]){max=scores[i];maxindexes=[];maxindexes.push(i)}
    else if(max==scores[i])maxindexes.push(i);
    i++;
}
 console.log("Bubbles tests: "+scores.length);
console.log("solutions with highest score: "+maxindexes) */















/* var loc1=3;
var loc2=4;
var loc3=5;
var gusse;
var hits=0;
var cnt=0;
var isSunk=false;
while(isSunk==false)
{
 gusse=prompt("hello enter a number from 0 to 6");
 console.log(gusse);
if(!(gusse>=0&&gusse<=6)){alert("enter a valid number")}
else if(gusse==loc1||gusse==loc2||gusse==loc3)
{cnt++;
    hits++;
    alert("hit!")
}
else{
    alert("miss")
    cnt++;
    Math.random()
}
if(hits==3){
    isSunk=true;
    alert("you sank my battleship!")
}
}
alert("you won after "+cnt+" tryes"+"ur shooting acc is "+3/cnt); */













/* var firstShip=[1,2,3];
var Tryes=0;
var hits=0;
while(true){
var userAnswer=prompt("enter a number from 0 to 6");
if(firstShip.includes(userAnswer)==true&&firstShip.length!=0){
    firstShip.splice(firstShip.indexOf(1),1);
    alert("Hit!!");
Tryes++;
}
else if(firstShip==0){alert("it tooks u "+tryes +" to win");
    break;
}
else {
Tryes++;
}
} */