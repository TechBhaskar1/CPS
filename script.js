var cps = 0;
var clicks=0;
var ms=0;
var started=false;
var time_limit=5000;

setInterval(()=>{
  if(started){
    ms+=10;
    cps=Math.round(clicks/(ms/1000));
    console.log(ms);
    console.log(clicks);
    console.log(started);
    console.log("Time limit is :"+ time_limit)
    update();
  }
},10)

function update(){
  if(time_limit==5000 && ms==5000){
    document.getElementById("Scoreboard").style.visibility = "visible";
    document.getElementById("di1").style.visibility = "hidden";
    document.getElementById("di2").style.visibility = "hidden";
    document.getElementById("di3").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    check()
  }
  if(time_limit==10000 && ms==10000){
    document.getElementById("Scoreboard").style.visibility = "visible";
    document.getElementById("di1").style.visibility = "hidden";
    document.getElementById("di2").style.visibility = "hidden";
    document.getElementById("di3").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    check()
  }
  if(time_limit==15000 && ms==15000){
    document.getElementById("Scoreboard").style.visibility = "visible";
    document.getElementById("di1").style.visibility = "hidden";
    document.getElementById("di2").style.visibility = "hidden";
    document.getElementById("di3").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    check()
  }
  if(time_limit==30000 && ms==30000){
    document.getElementById("Scoreboard").style.visibility = "visible";
    document.getElementById("di1").style.visibility = "hidden";
    document.getElementById("di2").style.visibility = "hidden";
    document.getElementById("di3").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    check()
  }
  if(time_limit==60000 && ms==60000){
    document.getElementById("Scoreboard").style.visibility = "visible";
    document.getElementById("di1").style.visibility = "hidden";
    document.getElementById("di2").style.visibility = "hidden";
    document.getElementById("di3").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    check()
  }
  if(time_limit==120000 && ms==120000){
    document.getElementById("Scoreboard").style.visibility = "visible";
    document.getElementById("di1").style.visibility = "hidden";
    document.getElementById("di2").style.visibility = "hidden";
    document.getElementById("di3").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    check()
  }
  if(time_limit==300000 && ms==300000){
    document.getElementById("Scoreboard").style.visibility = "visible";
    document.getElementById("di1").style.visibility = "hidden";
    document.getElementById("di2").style.visibility = "hidden";
    document.getElementById("di3").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    check()
  }
  document.getElementById("ans").innerHTML=cps;
  document.getElementById("click").innerHTML=clicks;
  document.getElementById("time").innerHTML=(ms/1000);
}

function CPS(){
  document.getElementById("btn_column").style.visibility= "hidden";
  clicks=clicks+1;
  if(!started){
    started=true;
    return;
  }
}

function Asecond(){
  time_limit=5000;
}
function Bsecond(){
  time_limit=10000;
}
function Csecond(){
  time_limit=15000;
}
function Dsecond(){
  time_limit=30000;
}
function Esecond(){
  time_limit=60000;
}
function Fsecond(){
  time_limit=120000;
}
function Gsecond(){
  time_limit=300000;
}
function check(){
  if(cps <= 5){
    document.getElementById("img").src="Turle.png";
    document.getElementById("p3").innerHTML="You are a slow Turtle";
    document.getElementById("p4").innerHTML=("Your Score is :- "+clicks);
    document.getElementById("p5").innerHTML=("Your CPS is :- "+cps);
   }
   else if(cps <= 7 && cps>5 ){
    document.getElementById("img").src="Wold.jpg";
    document.getElementById("p3").innerHTML="You are a wareWolf";
    document.getElementById("p4").innerHTML=("Your Score is :- "+clicks);
    document.getElementById("p5").innerHTML=("Your CPS is :- "+cps);
   }
   else if(cps <=8 && cps>7){
    document.getElementById("img").src="Rabbit.png";
    document.getElementById("p3").innerHTML="You are a fast Rabbit";
    document.getElementById("p4").innerHTML=("Your Score is :- "+clicks);
    document.getElementById("p5").innerHTML=("Your CPS is :- "+cps);
   }
   else{
    document.getElementById("img").src="Chittah.png";
    document.getElementById("p3").innerHTML="Your are the fastest chettah";
    document.getElementById("p4").innerHTML=("Your Score is :- "+clicks);
    document.getElementById("p5").innerHTML=("Your CPS is :- "+cps);
   }
}
function restart(){
  ms=0;
  cps=0;
  clicks=0;
  document.getElementById("click").innerHTML=ms;
  document.getElementById("ans").innerHTML=cps;
  document.getElementById("time").innerHTML=0;
  document.getElementById("Scoreboard").style.visibility = "hidden";
    document.getElementById("di1").style.visibility = "visible";
    document.getElementById("di2").style.visibility = "visible";
    document.getElementById("di3").style.visibility = "visible";
    document.getElementById("container").style.visibility = "visible";
    document.getElementById("btn_column").style.visibility= "visible";
    started=false;
}