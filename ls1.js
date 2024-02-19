document.querySelector("form").addEventListener("submit", fn1);

// whenever refreshing page it'll be empty so user stack should be taken from local storage
// var userStack = [];
var s1 = JSON.parse(localStorage.getItem("DB1")) || [];
console.log(s1);
function fn1 (event){
    event.preventDefault();
     var email = document.querySelector("#email").value;
     var pass = document.querySelector("#pass").value;
     var count = 0;
     for(var i=0;i<s1.length;i++){
         if(email==s1[i].emailAdd){
             count++;
             alert("your email is already registered.\nPlease Sign-In");
            //  event.preventDefault();
             break;
         }
         else{
            
         }
     }
     if(count==0){
        var obj1 = {
                emailAdd : email,
                passwd : pass,
            };
            s1.push(obj1);
            localStorage.setItem("DB1", JSON.stringify(s1));

            // After storing into localStorage user can go to any location using
            window.location.href = "ls2.html";
     }
}