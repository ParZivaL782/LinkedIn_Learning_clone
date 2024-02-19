document.querySelector("form").addEventListener("submit", fn2);
var s2 = JSON.parse(localStorage.getItem("DB2")) || [];
var s1 = JSON.parse(localStorage.getItem("DB1"));
var mail = s1[s1.length-1].emailAdd;
var passwd = s1[s1.length-1].passwd;
function fn2 (event){
    event.preventDefault();
    var fname = document.querySelector("#Fname").value;
    var lname = document.querySelector("#Lname").value;
    console.log(fname,lname);
    var obj2 = {
        Mail : mail,
        Passwd : passwd,
        FirstName : fname,
        LastName : lname,
    };
    s2.push(obj2);
    localStorage.setItem("DB2", JSON.stringify(s2));
    // alert("sign-Up sucessful")
    window.location.href = "ls3.html";
}
