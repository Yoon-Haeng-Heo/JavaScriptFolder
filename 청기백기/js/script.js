$('#btn1').on('click',blueDown);
$('#btn2').on('click',whiteDown);
$('#btn3').on('click',dotBlueDown);

function blueDown(){
    $('.blue').addClass('down');
    setTimeout(flagUp,1000);
}
function whiteDown(){
    $('.white').addClass('down');
    setTimeout(flagUp,1000);
}
function dotBlueDown(){
    $('.blue.dot').addClass('down');
    setTimeout(flagUp,1000);
}
function flagUp(){
     $('.flag').removeClass('down');
}
