function validation() {
  var result = "true";
  var firstname = document.getElementById("fname").value;
  var Laastname = document.getElementById("lname").value;
  var mail = document.getElementById("email").value;
  var passs = document.getElementById("Password").value;
  var Cpasss = document.getElementById("Cpassword").value;
  var terms = document.getElementById("box");
  if (firstname.length < 3) {
    document.getElementById("firstname").innerHTML =
      "please enter a valid first name!";
    result = false;
    return false;
  } else {
    result = true;
  }
  if (Laastname.length < 3) {
    document.getElementById("lasttname").innerHTML = "please enter a valid last name!";
    result = false;
    return false;
  } else {
    result = true;
  }
  if (
    mail == "" ||
    mail[0] == "@" ||
    mail.indexOf("@") < 0 ||
    mail.indexOf("@") < 0 ||
    mail.indexOf(".") >= mail.length - 2
  ) {
    document.getElementById("emaill").innerHTML = "please enter a valid email address!";
    result = false;
    return false;
  } else {
    result = true;
  }
  if (
    passs.length < 8 ||
    (mail.indexOf("$") < 0 &&
      mail.indexOf("#") < 0 &&
      mail.indexOf("@") < 0) &&
      (mail.indexOf("0") < 0 ||
        mail.indexOf("1") < 0 ||
        mail.indexOf("2") < 0 ||
        mail.indexOf("3") < 0 ||
        mail.indexOf("4") < 0)
  ) {
    document.getElementById("pass").innerHTML = "please provide a valid password!";
    result = false;
    return false;
  } else {
    result = true;
  }
  if (Cpasss != passs) {
    document.getElementById("Cpass").innerHTML =
      "password and confirmed password dont't match";
    result = false;
    return false;
  } else {
    result = true;
  }
  if (terms.checked == false) {
    document.getElementById("condition").innerHTML = "You must agree before submitting";
    result = false;
    return false;
  } else {
    result = true;
  }
  if (result == true) {
    alert("Your details have been saved successfully!");
  } else {
    alert("galat hh");
  }
}
