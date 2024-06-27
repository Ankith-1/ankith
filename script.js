const field=document.querySelector('#input');
function todisplay(data)
{ 
    field.value+=data;
}
function toeval()
{   
    field.value=field.value.replace('^','**');

    field.value=eval(field.value);
}
function todelete(){
    field.value="";
}

