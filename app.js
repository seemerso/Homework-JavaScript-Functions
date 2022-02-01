var number = 0;

function eleMaker (name,val){
    var ele = document.createElement("div");
    ele.innerHTML=name;
    ele.addEventListener("click",function (){
        increase(val);
    })
    document.body.querySelector(".main").appendChild(ele);
}

function increase(val){
    number=number+val;
    document.body.querySelector(".number").innerHTML=number;
}
document.body.querySelector(".clicker").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Avengers Assemble!",200);
});
document.body.querySelector(".clicker2").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("I am Iron Man.",300);
});
document.body.querySelector(".clicker3").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Pain Only Makes Us Stronger.",75);
});
document.body.querySelector(".clicker4").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("I Have Everything Under Control!",1000);
});
document.body.querySelector(".clicker5").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("","");
});