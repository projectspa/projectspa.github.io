window.onload=function() {
    var h1=document.getElementById("h1");
    var h2=document.getElementById("h2");
    var h3=document.getElementById("h3");
    play(h1);
    setTimeout(function() { play(h2); },1500);
    setTimeout(function() { play(h3); },3000);
}

function play(v) {
    v.className="animate";
}