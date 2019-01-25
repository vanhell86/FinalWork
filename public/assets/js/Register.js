

$('#submitBtn').on('click', function (){
    
    if($('#username').val()=='' || $('#password').val()==''
    || $('#name').val()=="" || $('#country').val()=="" 
    || $('#terms').prop('checked') == false){
        alert('Please fill all fields marked with "*" ');
    }    
    else if($('#password').val().length < 9){
        alert('Password must be at least 9 sym long');
    }else if($('#passwordRe').val() !==$('#password').val()){
        alert('Passwords are not the same');
    } else {
        alert('Super... You Finaly did it;)');
    }
});