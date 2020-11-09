var point = 0;
var cost1 = 2;
var cost2 = 5;
var cost3 = 20;
var cost4 = 30;
var cost5 = 35;

function add(){  
    point++ ;
    console.log(point);
    ifNumberOne();
}

function addAndPrint(){
document.getElementById("point").innerHTML = point;
}

function clickToAdd() {
    document.getElementById("squareToClick").addEventListener('click', (event) => this.add())
    document.getElementById("squareToClick").addEventListener('click', (event) => this.addAndPrint())
}

function clickToSpeed() {
    document.getElementById("gameSquares1").addEventListener('click', (event) => this.speed1());
}

function speed1(){
    if(point>=cost1)
    point=point-cost1;
    var time = setInterval(() => point=point+1, 1000);
    }



function ifNumberOne(){
    if(point>=10){
        document.body.style.backgroundColor = "red";
    }
    if(point>=20){
        document.body.style.fontFamily = "arial";
    }
    if(point==21){
        const el = document.createElement("div");
        el.innerText = "1/s";
        el.id="gameSquares1";
        my_div = document.getElementById("shop");
        my_div.appendChild(el);
    }
    if(point==25){
        const el = document.createElement("div");
        el.innerText = "10/s";
        el.id="gameSquares2";
        my_div = document.getElementById("shop");
        my_div.appendChild(el);
    }
    if(point==27){
        const el = document.createElement("div");
        el.innerText = "50/s";
        el.id="gameSquares3";
        my_div = document.getElementById("shop");
        my_div.appendChild(el);
    }
    if(point==29){
        const el = document.createElement("div");
        el.innerText = "200/s";
        el.id="gameSquares4";
        my_div = document.getElementById("shop");
        my_div.appendChild(el);
    }
    if(point==32){
        const el = document.createElement("div");
        el.innerText = "500/s";
        el.id="gameSquares5";
        my_div = document.getElementById("shop");
        my_div.appendChild(el);
    }
}


clickToAdd();
clickToSpeed();
