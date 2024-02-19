// var DB = JSON.parse(localStorage.getItem("DB1"));
document.querySelector("form").addEventListener("submit", fn5);
// var s5 = JSON.parse(localStorage).getItem("DB5") || [];

function fn5 (event){
    event.preventDefault();
    var code = document.querySelector("#code1").value;
    if(code=="12345"){
    //     var obj5 = {
    //     verificationCode : code,
    // };
    // s5.push(obj5);
    // localStorage.setItem("DB5", JSON.stringify(s5));
    alert("your signup sucessful")
    window.location.href = "signIn.html";
    }
    else {
        alert("Invalid code");
    }
}