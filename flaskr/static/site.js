
function validate() {
 if(document.getElementById("username").value.length < 5) {
  alert("Username must be longer than 5 characters");
   return false;
 }
}
