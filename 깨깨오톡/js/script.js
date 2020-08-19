$('#send').on('click',send);

function send(){
    
    var txt = $('textarea').val();
    if(txt != ""){
        $('.chatbox').append('<div class="my-bubble bubble">'+txt+'</div>');
        $('textarea').val("");
    }
    
}
