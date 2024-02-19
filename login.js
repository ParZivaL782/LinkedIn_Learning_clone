
// var regUsrs1 = JSON.parse(localStorage.getItem("userDataBase"));
var signInusr = JSON.parse(localStorage.getItem("signInDataBase"));
// console.log(signInusr);
// var correctpw = signInusr[signInusr.length-1].passwd;
// console.log(correctpw);
// var correctmail = signInusr[signInusr.length-1].emailAd;
var correctmail = signInusr;
document.querySelector("#emailappend").append(correctmail);
// document.getElementById("cursor1").style.cursor = cell;
document.querySelector("form").addEventListener("submit", logIn);
function logIn (event){
    event.preventDefault();
    var password = document.querySelector("#passWd").value;
// console.log("correctpw:",correctpw);
// console.log("inputpw:",password);

  
        
        login(password,correctmail);
        
    
}

function showpass(){
        var input = document.querySelector("#passWd");
        var show = document.querySelector("#showpwd");
        var hide = document.querySelector("#hidepwd");

        if(input.type === 'correctpw'){
            input.type = "text";
            show.style.display = "none";
            hide.style.display = "inline";

        }
        else{
            
            input.type = "correctpw";
            show.style.display = "inline";
            hide.style.display = "none";
        }

    }

async function login(correctpw, correctmail) {
    try {
      let loginData = {
        password: correctpw,
        email: correctmail,
      };
      loginData = JSON.stringify(loginData);

      let res = await fetch("https://lynda01.herokuapp.com/login", {
        method: "POST",
        body: loginData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      let user = await res.json();
      if(user.status){
          localStorage.setItem("logindata", JSON.stringify(user));
          alert("login Sucessful");
          window.location.href = "index.html";
      }
      else{

          alert("Wrong Password")
      }
      console.log("user:", user);
    } catch (error) {
      console.log("error:", error);
    }
  }