document.querySelector("form").addEventListener("submit", fn3);
var s3 = JSON.parse(localStorage.getItem("DB3")) || [];
var s2 = JSON.parse(localStorage.getItem("DB2"));
var mail = s2[s2.length-1].Mail;
var passwd = s2[s2.length-1].Passwd;
var Fname = s2[s2.length-1].FirstName;
var Lname = s2[s2.length-1].LastName;
function fn3 (event){
    event.preventDefault();
    var ctryName = document.querySelector("#countryName").value;
    var cname = document.querySelector("#cityName").value;
    
    var obj3 = {
        Mail : mail,
        Password : passwd,
        FirstName : Fname,
        LastName : Lname,
        Country : ctryName,
        City : cname,
    };
    s3.push(obj3);
    localStorage.setItem("DB3", JSON.stringify(s3));
    
    window.location.href = "ls4.html";
}