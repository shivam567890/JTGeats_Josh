var model=document.getElementById("model");
var popup=document.getElementById("popup");
var cartbtn=document.getElementsByClassName("cartbtn")[0];
cart.onclick=function(event){
    event.preventDefault();
    model.style.display="block";
}

cartbtn.onclick=function(){
    model.style.display="none";
}



var video_btn=document.getElementById("video-btn");

var video_resto=document.getElementById("lifting");



video_resto.onclick=function() {

if(!(video_btn.style.visibility=='hidden')){
    video_btn.style.visibility = 'hidden';
}
else{
    video_btn.style.visibility = 'visible';
}


}



video_btn.onclick=function() {

    if(!(video_btn.style.visibility=='hidden')){
        video_btn.style.visibility = 'hidden';
        video_resto.play();
    }

    }

    var req_btn=document.getElementById("req_button");
    var req_dish=document.getElementById("req_dish");
    var req_content=document.getElementById("req_content");

    req_btn.onclick=function(){
        req_dish.style.display="block";
    }


    var cancel_btn=document.getElementsByClassName("button1")[0];
    var submit_btn=document.getElementsByClassName("button2")[0];


    cancel_btn.onclick=function(){
        req_dish.style.display="none";
    }
    submit_btn.onclick=function(){
        req_dish.style.display="none";
    }