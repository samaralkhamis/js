let buton =document.getElementById("submitBtn");
buton.style.visibility = "hidden";

function Pass(){
   let pass1 = document.getElementById("password1");
   let pass2 = document.getElementById("password2");
   let msg1 = document.getElementById("pass1_check");
   let msg2 = document.getElementById("pass2_check");

        // first condition for length        
   if(pass1.value.length >= 6){
       msg1.innerHTML = "Correct : the length is 6";
   }
   else{
       msg1.innerHTML="wrong :Length is short";
   }
        //second condithin for matching
   if (pass1.value == pass2.value) {
       msg2.innerHTML= "Password Match";
       buton.style.visibility="visible";
   }
   else if(pass1.value != pass2.value ){
       msg2.innerHTML="The two Password Doesn't match";
   }

}