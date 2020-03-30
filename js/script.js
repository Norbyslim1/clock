document.addEventListener('DOMContentLoaded', function(){
    var handS;
    var handM;
    var handH;
    function moveSecondHand(){
        handS ++;
        handS= handS*6;
        document.getElementById('secondHand').style.transform='rotatez('+handS+'deg)';
        handS=handS/6;
    }
    function moveMinuteHand(){
        handM ++
        handM= handM*6;
        document.getElementById('minuteHand').style.transform='rotatez('+handM+'deg)';
        handM=handM/6;
    }
    function moveHourHand(){
        handH ++;
        handH= handH*30;
        document.getElementById('hourHand').style.transform='rotatez('+handH+'deg)';
        handH=handH/30;
    }
        document.querySelector("button").addEventListener("click", function(e){
        handS= document.getElementById('second').value;
        handM= document.getElementById('minute').value;
        handH= document.getElementById('hour').value;
        document.getElementById('secondHand').style.transform='rotatez('+handS*6+'deg)';
        document.getElementById('minuteHand').style.transform='rotatez('+handM*6+'deg)';
        document.getElementById('hourHand').style.transform='rotatez('+handH*30+'deg)';
        setInterval(moveSecondHand,995); 
        setInterval(moveMinuteHand,59995);   
        setInterval(moveHourHand,35999995);
           
    });
})