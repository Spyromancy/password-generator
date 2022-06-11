// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowercase = "abcedfghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase(); // something something smarter not harder
  var numbers = "1234567890";
  var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var use_lower, has_lower, use_upper, has_upper, use_num, has_num, use_spec, has_spec;
  has_lower = has_upper = has_num = has_spec = false;
  var len;
  var password = "";

  do {
    len = parseInt(window.prompt("How long would you like your password to be?"));

    if(!len && len!==0){
      window.alert("Please enter a number.");
    }
    else if (len < 8){
      window.alert("Password must be at least 8 characters in length.");
    }
    else if(len > 128){
      window.alert("Your password does NOT need to be more than 128 characters. Be reasonable.") //"Your password cannot exceed 128 characters."
    }
  }while(!(len && (8 <= len && len <= 128)))
  
  do{
    use_lower=window.confirm("Include lowercase letters?");
    use_upper=window.confirm("Include Uppercase letters?");
    use_num=window.confirm("Include numbers?");
    use_spec=window.confirm("Include special characters?");
    if(!(use_lower || use_upper || use_num || use_spec)){
      window.alert(`... so you want a ${len} character password populated by what? null values? Kanji? arabic? this is UTF-8 buddy pick one of the options.`) // i learned f literals in python, i'm not going back.
    }
  }while(!(use_lower || use_upper || use_num || use_spec))

  var allowed = [];
  if(use_lower){
    allowed.push("lowercase");
  }
  if(use_upper){
    allowed.push("uppercase");
  }
  if(use_num){
    allowed.push("numbers");
  }
  if(use_spec){
    allowed.push("special");
  }


  while(password.length<len){
    var char;
    var chartype= allowed[Math.floor(Math.random()*allowed.length)]; // this should give each character type roughly the same chance of inclusion, otherwise numbers will appear much less often.
    if(password.length+4>=len && use_lower && !has_lower){
      char= lowercase[Math.floor(Math.random()*lowercase.length)];
      has_lower=true;
      password+=char;
    }
    if(password.length+4>=len && use_upper && !has_upper){
      char= uppercase[Math.floor(Math.random()*uppercase.length)];
      has_upper=true;
      password+=char;
    }
    if(password.length+4>=len && use_num && !has_num){
      char= numbers[Math.floor(Math.random()*numbers.length)];
      has_num=true;
      password+=char;
    }
    if(password.length+4>=len && use_spec && !has_spec){
      char= special[Math.floor(Math.random()*special.length)];
      password+=char;
      has_spec=true;
    }
    else if(chartype==="lowercase"){
      char= lowercase[Math.floor(Math.random()*lowercase.length)];
      has_lower=true;
    }
    else if(chartype==="uppercase"){
      char= uppercase[Math.floor(Math.random()*uppercase.length)];
      has_upper=true;
    }
    else if(chartype==="numbers"){
      char= numbers[Math.floor(Math.random()*numbers.length)];
      has_num=true;
    }
    else if(chartype==="special"){ // Q: but couldn't this just be an 'else' statement? A: yes. but by the time i realized that i already set up the logic and instead of spending time to fix it i decided to write this comment
      char= special[Math.floor(Math.random()*special.length)];
      has_spec=true;
    }
    password+=char;
  }
  /**/

  return password;
}