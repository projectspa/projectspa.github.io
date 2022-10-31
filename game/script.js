var buffer,canvas;
var dis=10;
var mouse=new Object();
var xy=[];
var pos=new Object();
var person=new Image(),rifle=new Image();
person.src="person.png";
rifle.src="rifle.png";
function start() {
    buffer=document.createElement("canvas");
    buffer.width=1000;
    buffer.height=800;
    buffer.style.height="800px";
    buffer.style.width="1000px";
    canvas=document.getElementById("canvas");
    pos.x=500;
    pos.y=400;
    canvas.onmousemove=function(event) {
        event=event||window.event;
        mouse.x=event.offsetX;
        mouse.y=event.offsetY;
    }
    setInterval(function() { update(); },40);
}
function update() {
    buffer.getContext("2d").drawImage(person,pos.x,pos.y,100,100);
    buffer.getContext("2d").drawImage(rifle,mouse.x,mouse.y);
    hypo=Math.sqrt(Math.pow((mouse.x-pos.x),2)+Math.pow((mouse.y-pos.y),2));
    pos.x+=dis/hypo*(mouse.x-pos.x);
    pos.y+=dis/hypo*(mouse.y-pos.y);
    canvas.getContext("2d").clearRect(0,0,buffer.width,buffer.height);
    canvas.getContext("2d").drawImage(buffer,0,0,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
    buffer.getContext("2d").clearRect(0,0,buffer.width,buffer.height);
}