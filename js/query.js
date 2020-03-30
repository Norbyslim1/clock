$(function(){
    var handS;
    var handM;
    var handH;
    function moveSecondHand(){
        handS ++;
        handS= handS*6;
        $('#secondHand').css('transform','rotatez('+handS+'deg)');
        handS=handS/6;
    }
    function moveMinuteHand(){
        handM ++
        handM= handM*6;
        $('#minuteHand').css('transform','rotatez('+handM+'deg)');
        handM=handM/6;
    }
    function moveHourHand(){
        handH ++;
        handH= handH*30;
        $('#hourHand').css('transform','rotatez('+handH+'deg)');
        handH=handH/30;
    }
    function startClock(){
        handS= $('#second').val();
        handM= $('#minute').val();
        handH= $('#hour').val();
        $('#secondHand').css('transform','rotatez('+handS*6+'deg)');
        $('#minuteHand').css('transform','rotatez('+handM*6+'deg)');
        $('#hourHand').css('transform','rotatez('+handH*30+'deg)');
        setInterval(moveSecondHand,995); 
        setInterval(moveMinuteHand,59995);   
        setInterval(moveHourHand,35999995);   
    }

    $('button').on('click', startClock);
})