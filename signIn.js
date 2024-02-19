document.querySelector("form").addEventListener("submit", signIn)
var regUsrs = JSON.parse(localStorage.getItem("DB1")) || [];
var signInStack = [];
// console.log(regUsrs);
function signIn (event){
    
    console.log("1")
     event.preventDefault();
    console.log("2")
    var email = document.querySelector("#emailsi").value;
    console.log("3")
    localStorage.setItem("signInDataBase", JSON.stringify(email));
    console.log("4")
    window.location.href = "login.html";
    // console.log(email);
    // var count = 0;
    
    // for(var i=0; i < regUsrs.length; i++)
    // {
    //     if(email==regUsrs[i].emailAdd)
    //     {
    //         count++;
    //         var logindata = {
    //             emailAd: email,
    //             passwd: regUsrs[i].passwd,
    //         };
    //         signInStack.push(logindata);
    //         localStorage.setItem("signInDataBase", JSON.stringify(signInStack));
    //         // alert("email is correct")
    //         window.location.href = "login.html"
    //         break;
    //     }
        
    // }
    // if(count==0)
    // {
    //     alert("Your email is not registered");
    //     
    // }

    
    
}

function library(){
    alert("You don't have any Library Card registered")
}



