let selector = document.getElementById("selector");
let popup = document.getElementById("popup");
let text = document.getElementById("text");
let coin = document.getElementById("coin");
let coinAudio = document.getElementById("coin-audio");

setTimeout(function(){
    popup.style.height = "65vh";
    text.style.opacity = "1";
},1000);

selector.addEventListener("change",function(e){
        
    if(e.target.value === "Head"){
        
        const number = Math.floor(Math.random() * 2);
        
        if(number === 0){
            coinAudio.play();
            coin.style.display = "block";
            text.innerHTML = "";
            setTimeout(function(){ 
                text.innerHTML = "Congrats It's Head &#128525;";
                coin.style.display = "none";
                coinAudio.pause();
             }, 2500);
        }else{
            coinAudio.play();
            coin.style.display = "block";
            text.innerHTML = "";
            setTimeout(function(){ 
                text.innerHTML = "Oops It's Tail &#128517;";
                coin.style.display = "none";
                coinAudio.pause();
             }, 2500);
        }
    }else if(e.target.value === "Tail"){
        
        const number = Math.floor(Math.random() * 2);

        if(number === 1){
            coinAudio.play();
            coin.style.display = "block";
            text.innerHTML = "";
            setTimeout(function(){ 
                text.innerHTML = "Congrats It's Tails &#128525;";
                coin.style.display = "none";
                coinAudio.pause();
             }, 2500);
        }else{
            coinAudio.play();
            coin.style.display = "block";
            text.innerHTML = "";
            setTimeout(function(){ 
                text.innerHTML = "Oops It's Head &#128517;";
                coin.style.display = "none";
                coinAudio.pause();
             }, 2500);
        }
    }else{
        text.innerHTML = "Select Your Side...";
    }
})