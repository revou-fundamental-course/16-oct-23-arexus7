

function replaceName() {
  let name = prompt("Hello, What's Your Name?", "");
  document.getElementById("name").innerHTML = name
}

document.getElementById('button').addEventListener("click", function() {
  replaceName();
})

Form //
let formName = document.getElementById('formName');

document.getElementById('Submit').addEventListener("click", function(){
   const name = formName.value

   if (name= ""){
    document.getElementById("error-name").innerHTML = "Name Field Cannot Be Empty !"
   
  }else{
   
   document.getElementById('Name').innerHTML = name
  }
})

function validateForm(){
  const name = document.forms['message-form']['formName'].value
  const dob= document.forms['message-form']['dob'].value
  const gender= document.forms['message-form']['gender'].value
  const message=document.forms['message-form']['textBox'].value
  const today = new Date();
  

  if(name == ''){
    document.getElementById("error-name").innerHTML = "Cannot Be Empty!"

    return false
  }


  if(dob == ''){
    document.getElementById("error-name").innerHTML = "Date of Birth Cannot Be Empty!"

    return false
  }

  if(gender == ''){
    document.getElementById("error-name").innerHTML = "Please pick a gender!"
    return false
  }


  if(message== ''){
    document.getElementById("error-name").innerHTML = "Please enter your message!"
    return false
  } 
  
  document.getElementById("time_text").innerHTML = "Current Time : "+today;
    document.getElementById("name_text").innerHTML = "Nama : "+name;
    document.getElementById("dob_text").innerHTML = "Tanggal Lahir : "+dob;
    document.getElementById("gender_text").innerHTML = "Jenis Kelamin : "+gender;
    document.getElementById("message_text").innerHTML="Message : "+message;
    return false;
  // document.getElementById("name").innerHTML = name;
  // document.getElementById("error-name").innerHTML="";
  // return false;

}



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }