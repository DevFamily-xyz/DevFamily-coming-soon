var targetDate = new Date("July 30,2021 00:00:00").getTime();
var  setTimer= setInterval(function(){
    var now = new Date().getTime();

    //difference is the leftout time in milliseconds
    var difference = targetDate - now;

    //calculating leftout days,hours,mins and seconds 
    var seconds = Math.floor((difference/1000)%60);
    var minutes = Math.floor((difference/(1000*60))%60);
    var hours = Math.floor((difference/(1000*60*60))%24);
    var days =Math.floor(difference/(1000*60*60*24));
    
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours +"h";
    document.getElementById("mins").innerHTML = minutes +"m";
    document.getElementById("seconds").innerHTML = seconds +"s";
    
    //if the target date is crossed,then code below is executed
    if(difference<0){
        clearInterval(setTimer);
        var text = document.querySelector('.hidden-content');
        document.querySelector('.display-content').style.display="none";
        text.style.display="block";
        text.innerText="EXPIRED";
        text.style.marginTop="50vh";
    }

},1000);