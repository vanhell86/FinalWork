
var n = new Date();
var year = n.getFullYear();
var month = n.getMonth() + 1;
var day = n.getDate();
var hours = n.getHours();
var min = n.getMinutes();
var date = "   " + month + "/" + day + "/" + year + "  " + hours + ":" + min;

function get_msg_html(name, msg, date) {
    var msg_temple = `
        <div class="message-container">
            <div class="message-body">
                <h6 class=""> ${name} <span >${date} </span>  </h6>
                <p class="messageText">${msg}</p>
            </div>            
        `;
    return msg_temple;
};

$('#sendBtn').on('click', function (){
    var name = $('#username').val();
    var msg = $('#message').val();

    if(name == '' || msg == '' ){
        alert('Aizpildiet Username un Message laukus')
    } else{
        $('.chat-container').append(get_msg_html(name,msg, date));
    }
    $('#message').val('');
   console.log('Name is: ' + name);
   console.log('message is: ' + msg);
    
});

