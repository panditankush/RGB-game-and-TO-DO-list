// alert("connected");
var squares= document.querySelectorAll(".square");
var message=document.querySelector("#message");
var game=document.querySelector("#game");
var rightcolor=document.querySelector("#rightcolor");
var levelbutton=document.querySelectorAll(".level");

var numofsquares=9;
var colors=[];
var pickedcolor;

start();
function start(){
	levelbutton[2].classList.add("selected");
	reset();
	realgame();
	mode();
}


function numberGenerator(n){
	return Math.floor(Math.random()*n);
}

function colorGenerator(){
	var r=numberGenerator(256);
	var g=numberGenerator(256);
	var b=numberGenerator(256);

	return "rgb("+r+", "+g+", "+b+")";

}

function colorGiver(n){
	var arr=[];
	for(var i=0;i<n;i++){
		arr.push(colorGenerator());
		
	}
return arr;

}

function pickColor(){
	var random =  numberGenerator(colors.length);
	return colors[random];
}

function reset(){
	document.querySelector("h1").style.backgroundColor="#05fce4";
	colors = colorGiver(numofsquares);
	pickedcolor=pickColor();
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
            squares[i].style.display = "none";
		}
	}
    message.innerHTML="";
    game.textContent="New Game";
    rightcolor.textContent=pickedcolor;
}

function realgame(){
	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",function(){
			var clickedcolor=this.style.backgroundColor;
			if(clickedcolor===pickedcolor){
				message.innerHTML='CORRECT';
				game.textContent="Play Again??";
				
				changecolors();
			}
			else{
				this.style.backgroundColor="#232323";
				message.innerHTML = "Try Again!";
			}
		});
	}
}

function changecolors(){
	document.querySelector("h1").style.backgroundColor=pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=pickedcolor;
	}
}

function mode(){
	for(var i=0;i<levelbutton.length;i++){
		levelbutton[i].addEventListener("click",function(){
           levelbutton[0].classList.remove("selected");
           levelbutton[1].classList.remove("selected");
           levelbutton[2].classList.remove("selected");
           this.classList.add("selected");
           if(this.textContent=="easy"){
           	numofsquares=3;
           }
           else if(this.textContent=="medium"){
           	numofsquares=6;
           }
           else
           {
           	numofsquares=9;
           }
           reset();

		});
	}
}

game.addEventListener("click",function(){

	reset();
});