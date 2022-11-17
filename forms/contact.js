var nameError= document.getElementById('name-error');
var emailError= document.getElementById('email-error');
var SubjectError= document.getElementById('Subject-error');
var MessageError= document.getElementById('Message-error');
var sendError= document.getElementById('send-error');

function validateName()
{
    var name=document.getElementById('contact-name').value;

    if(name.length==0)
    {
        nameError.innerHTML='name is required';

        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML='write full name';
        return false;
    }

    nameError.innerHTML='<i class="fa fa-check-circle-o"></i>';
    return true;

}
function validateEmail()
{
    var email=document.getElementById('contact-email').value;


    if(email.length==0)
    {
        emailError.innerHTML='Email is required';

        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML='email invalid';
        return false;
    }

    emailError.innerHTML='<i class="fa fa-check-circle-o"></i>';
    return true;
}
function validateSubject()
{
    var subject=document.getElementById('contact-subject').value;
    var required=15;
    var left = required - subject.length;

    if(left > 0)
    {
        SubjectError.innerHTML = left + 'subject letters needed';
        return false;
    }
     SubjectError.innerHTML='<i class="fa fa-check-circle-o"></i>';
     return true;
}
function validateMessage()
{
    var message=document.getElementById('contact-Message').value;
    var required=30;
    var left = required - message.length;

    if(left > 0)
    {
        MessageError.innerHTML = left + 'subject letters needed';
        return false;
    }
     MessageError.innerHTML='<i class="fa fa-check-circle-o"></i>';
     return true;
}

function validateForm()
{
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage() )
    {
        sendError.innerHTML = 'please fill all to submit';
        return false;
    }
}