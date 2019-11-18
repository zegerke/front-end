    function saveform(){
      let person = {
        firstname : document.getElementById('firstname').value,
        lastname : document.getElementById('lastname').value,
        username : document.getElementById('username').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        confirmpassword : document.getElementById('confirmpassword').value,
        adress : document.getElementById('adress').value,
        city : document.getElementById('city').value,
        zip : document.getElementById('zip').value,
        phonenumber : document.getElementById('phonenumber').value,
        age : document.getElementById('age').value,
        hobbies : document.getElementById('hobbies').value,
      }
      localStorage.setItem('user', JSON.stringify(person));

    };
    function checkform(){
      saveform();
      console.log(JSON.parse(localStorage.getItem('user')));
      var user = JSON.parse(localStorage.getItem('user'));
      let a = user.password.search(/\d/);
      let b = user.email.search("@gmail.com");
      let c =user.password.search(/[A-Z]/)
      if ( a == (-1)) {
        document.getElementById('password').style.border= "red inset 2px";
        document.getElementById('confirmpassword').style.border= "red inset 2px" ;
        document.getElementById('confirmpassword').value="";
        document.getElementById('password').value="";
        alert('Password needs to contain at least 1 number');
        return false;
      }
      else if ( c == (-1)) {
        document.getElementById('password').style.border= "red inset 2px";
        document.getElementById('confirmpassword').style.border= "red inset 2px" ;
        document.getElementById('confirmpassword').value="";
        document.getElementById('password').value="";
        document.alert('Password needs to contain at least 1 capital letter');
        return false;
      }
      else if (user.password != user.confirmpassword) {
        document.getElementById('password').style.border= "red inset 2px" ;
        document.getElementById('confirmpassword').style.border= "red inset 2px" ;
        document.getElementById('confirmpassword').value="";
        document.getElementById('password').value="";
        alert("Passwords do not match");
        return false;
      }
      else if (b == (-1)) {
        document.getElementById('email').style.border= "red inset 2px" ;
        document.getElementById('email').value="";
        alert("Email must be @gmail.com!");
        return false;
      }
      else {
        alert("Registration sucesful");
        window.location.href = "complete.html";
        return false;

      }
    }