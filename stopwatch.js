var hr = 0;
var min = 0;
var sec = 0;

var dhr = 0;
var dmin = 0;
var dsec = 0;

let interval = null;
let stat ="stopped";

function stopwatch(){
    sec++;

    if(sec/60 == 1){
        sec = 0;
        min++;
        

        if(min/60 == 1)
        {
            min = 0;
            hr++;
        }
    }

    if(sec<10){
        dsec = "0" + sec.toString();
    }
    else{
        dsec = sec;
    }
    if(min<10){
        dmin = "0" + min.toString();
    }
    else{
        dmin = min;
    }
    if(hr<10){
        dhr = "0" + hr.toString();
    }
    else{
        dhr = hr;
    }


    document.getElementById("hr").innerHTML = dhr
    document.getElementById("min").innerHTML = dmin
    document.getElementById("sec").innerHTML = dsec

    
}



function start(){
    if(stat === "stopped"){
        interval = window.setInterval(stopwatch,1000);
        document.getElementById("start").innerHTML = "Stop"
        stat = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "Start"
        stat = "stopped";

    }
}

function reset(){
    window.clearInterval(interval);
    dmin = 0;
    dsec = 0;
    dhr = 0;
    // stat = "stopped"
    document.getElementById("hr").innerHTML ="0"+ dhr
    document.getElementById("min").innerHTML ="0"+ dmin
    document.getElementById("sec").innerHTML ="0"+ dsec
    document.getElementById("start").innerHTML = "Start"


}