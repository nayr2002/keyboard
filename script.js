makeKeyboard();

function makeKeyboard(){
    var alpha = ['q','w','e','r','t','y','u','i','o','p','a','s',
                 'd','f','g','h','j','k','l',';','\'','z','x','c',
                 'v','b','n','m', ',','.'];
    for(var i = 0; i < alpha.length; i++){
        makeButton(alpha[i]);
    }
    makeButton("space");
}

function makeButton(str){
    var key = document.createElement("button");
    key.innerHTML = str;
    key.id = str;
    key.addEventListener("click", makeText);
    key.addEventListener("mouseup", released);
    key.addEventListener("mousedown", pressed);
    key.addEventListener("mouseover", hover);
    key.addEventListener("mouseout", unhover);
    document.getElementById("keyBoard").appendChild(key);
}

function pressed(){
    this.style.backgroundColor = "hotpink";
    this.style.color = "greenyellow";
}

function released(){
    this.style.backgroundColor = "greenyellow";
    this.style.color = "";
}

function hover(){
    this.style.backgroundColor = "lawngreen";
}

function unhover(){
    this.style.backgroundColor = "greenyellow"
}

function kbtop(){
    document.getElementById("keyBoard").style.top = "0px";
    document.getElementById("textBox").style.top = "0px";
}

function kbbottom(){
    document.getElementById("keyBoard").style.top = "320px";
    document.getElementById("textBox").style.top = "-420px";
}

function makeText(){
    if(this.innerHTML === "space"){
        document.getElementById("textBox").innerHTML += " ";
    } else {
        document.getElementById("textBox").innerHTML += this.innerHTML;
    }
}