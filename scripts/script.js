window.onload=function() {
    var img1=document.getElementById("img1");
    var img2=document.getElementById("img2");
    var img3=document.getElementById("img3");
    var head1=document.getElementById("head1");
    var head2=document.getElementById("head2");
    var head3=document.getElementById("head3");
    play(img1);
    setTimeout(function() { play(img3); },1000);
    setTimeout(function() { play(img2); },2000);
    setTimeout(function() { play(head1); },3000);
    setTimeout(function() { play(head2); },4500);
    setTimeout(function() { play(head3); },6000);
}

function play(v) {
    v.className="animate";
}