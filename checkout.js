var uN  = JSON.parse(localStorage.getItem("usrNames"));
var Fname = uN[0].firstName;
var Lname = uN[0].lastName;

document.querySelector("#FN1").textContent = Fname;
document.querySelector("#FN").value = Fname;
document.querySelector("#LN").value =  Lname;

function signOut(){
    localStorage.removeItem("usrNames");
    localStorage.removeItem("signInDataBase");
    location.reload();
    alert("Signed out successfully");
    window.location.href = "landing_page_after_signup.html";
    // window.location.href = "home.html";
}